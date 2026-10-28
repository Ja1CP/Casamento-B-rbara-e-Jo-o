(function () {
  const $ = id => document.getElementById(id);
  const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  // Textos da capa
  $("noiva").textContent = DADOS.noiva;
  $("noivo").textContent = DADOS.noivo;
  $("quando").textContent = DADOS.data + " · às " + DADOS.horario;
  $("onde").innerHTML = "<span>" + DADOS.cidade + "</span><b></b><span>" + DADOS.estado + "</span>";
  $("local").textContent = DADOS.local + " · " + DADOS.endereco;
  $("verso").textContent = DADOS.versiculo + " (" + DADOS.referencia + ")";
  $("mapa").href = DADOS.mapa;
  const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
  const diaCasamento = new Date(DADOS.dataISO); diaCasamento.setHours(0, 0, 0, 0);
  const dias = Math.round((diaCasamento - hoje) / 864e5);
  $("contagem").textContent = dias > 1 ? "Faltam " + dias + " dias" : dias === 1 ? "É amanhã!" : dias === 0 ? "Hoje é o grande dia!" : "Obrigado por celebrar conosco";
  $("rodape").textContent = DADOS.noiva + " & " + DADOS.noivo;

  // Pix (BR Code estático com valor)
  const tlv = (id, v) => id + String(v.length).padStart(2, "0") + v;
  function crc16(s) {
    let c = 0xFFFF;
    for (let i = 0; i < s.length; i++) {
      c ^= s.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) c = (c & 0x8000) ? ((c << 1) ^ 0x1021) : (c << 1);
      c &= 0xFFFF;
    }
    return c.toString(16).toUpperCase().padStart(4, "0");
  }
  function pix(v) {
    const p = tlv("00", "01") + tlv("01", "11") +
      tlv("26", tlv("00", "br.gov.bcb.pix") + tlv("01", DADOS.pix.chave)) +
      tlv("52", "0000") + tlv("53", "986") + (v > 0 ? tlv("54", v.toFixed(2)) : "") +
      tlv("58", "BR") + tlv("59", DADOS.pix.nome) + tlv("60", DADOS.pix.cidade) +
      tlv("62", tlv("05", "***")) + "6304";
    return p + crc16(p);
  }

  // Janela do Pix
  const dlg = $("dlg"), qr = $("qr"), code = $("code"), inp = $("valorLivre");
  function render(v) {
    qr.innerHTML = "";
    if (!(v > 0)) { code.value = ""; return; }
    v = Math.round(v * 100) / 100;
    const c = pix(v); code.value = c;
    new QRCode(qr, { text: c, width: 200, height: 200, correctLevel: QRCode.CorrectLevel.M });
  }
  function abrir(nome, preco) {
    $("dTitulo").textContent = nome;
    const lk = (typeof LINKS_CARTAO !== "undefined" && LINKS_CARTAO[nome]) || "";
    $("cartao").hidden = !lk; $("cartao").href = lk || "#";
    $("dValor").textContent = preco ? brl(preco) : "";
    $("livre").hidden = !!preco; inp.value = "";
    render(preco || 0); dlg.showModal();
  }
  inp.addEventListener("input", () => render(parseFloat(inp.value.replace(",", "."))));
  $("fechar").onclick = () => dlg.close();
  $("copiar").onclick = async e => {
    if (!code.value) return;
    try { await navigator.clipboard.writeText(code.value); } catch (_) { code.select(); document.execCommand("copy"); }
    e.target.textContent = "Copiado! ✓";
    setTimeout(() => e.target.textContent = "Copiar código Pix", 2000);
  };

  // Presentes já dados (lista em dados.js)
  const JA = new Set(typeof JA_PRESENTEADOS !== "undefined" ? JA_PRESENTEADOS : []);
  const ja = n => (JA.has(n) ? 1 : 0);
  const todos = new Set(CATEGORIAS.flatMap(c => c.itens.map(i => i[0])));
  JA.forEach(n => { if (!todos.has(n)) console.warn("JA_PRESENTEADOS: nome não encontrado na lista:", n); });
  if (JA.size) { const av = $("aviso"); if (av) av.hidden = false; }

  // Lista com filtros
  let filtro = -1;
  const chips = $("chips"), lista = $("lista"), busca = $("busca");
  ["Todos", ...CATEGORIAS.map(c => c.nome)].forEach((n, i) => {
    const b = document.createElement("button");
    b.className = "chip"; b.textContent = n; b.setAttribute("aria-pressed", i === 0);
    b.onclick = () => {
      filtro = i - 1;
      [...chips.children].forEach((c, k) => c.setAttribute("aria-pressed", k === i));
      mostrar();
    };
    chips.appendChild(b);
  });
  function mostrar() {
    const q = busca.value.trim().toLowerCase();
    lista.innerHTML = ""; let n = 0;
    CATEGORIAS.forEach((cat, ci) => {
      if (filtro >= 0 && filtro !== ci) return;
      const its = cat.itens.filter(it => it[0].toLowerCase().includes(q)).sort((x, y) => ja(x[0]) - ja(y[0]));
      if (!its.length) return;
      n += its.length;
      const h = document.createElement("div"); h.className = "cat"; h.textContent = cat.nome; lista.appendChild(h);
      const g = document.createElement("div"); g.className = "grid";
      its.forEach(([nome, preco, icone, foto]) => {
        const d = document.createElement("div"); d.className = "card";
        d.innerHTML = '<div class="thumb"></div><h3></h3><div class="price' + (preco ? "" : " free") + '">' +
          (preco ? brl(preco) : "Valor à sua escolha") + '</div><button>Presentear</button>';
        d.querySelector("h3").textContent = nome;
        const th = d.querySelector(".thumb"); th.textContent = icone || "🎁";
        if (foto) { const im = new Image(); im.alt = nome; im.loading = "lazy"; im.onerror = () => im.remove(); im.src = foto; th.appendChild(im); }
        const bt = d.querySelector("button");
        if (JA.has(nome)) { d.classList.add("dado"); bt.textContent = "Já presenteado 💛"; bt.disabled = true; }
        else bt.onclick = () => abrir(nome, preco);
        g.appendChild(d);
      });
      lista.appendChild(g);
    });
    if (!n) lista.innerHTML = '<p class="none">Nenhum presente encontrado.</p>';
  }
  busca.addEventListener("input", mostrar);
  mostrar();
})();
