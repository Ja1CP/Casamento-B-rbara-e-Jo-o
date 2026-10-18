(function () {
  const $ = id => document.getElementById(id);
  const nomes = DADOS.noiva + " & " + DADOS.noivo;
  $("nomes").textContent = nomes;
  $("rodape").textContent = nomes;
  $("intro").textContent = HISTORIA.intro;
  $("tHist").textContent = HISTORIA.tituloHistoria;
  $("tGal").textContent = HISTORIA.tituloGaleria;

  // Quadro de foto: mostra o monograma com "Sua foto aqui" até a imagem carregar (ou se ela não existir)
  function caixa(src, alt) {
    const d = document.createElement("div"); d.className = "fbox";
    const s = document.createElement("span"); s.textContent = "Sua foto aqui"; d.appendChild(s);
    if (src) {
      const im = new Image(); im.alt = alt || ""; im.loading = "lazy";
      im.onerror = () => im.remove(); im.src = src; d.appendChild(im);
    }
    return d;
  }

  HISTORIA.noivos.forEach(n => {
    const a = document.createElement("article"); a.className = "noivo";
    a.appendChild(caixa(n.foto, n.nome));
    const h = document.createElement("h2"); h.className = "script"; h.textContent = n.nome; a.appendChild(h);
    const p = document.createElement("p"); p.textContent = n.texto; a.appendChild(p);
    $("noivos").appendChild(a);
  });

  HISTORIA.marcos.forEach(m => {
    const d = document.createElement("div"); d.className = "marco";
    d.innerHTML = "<small></small><h3></h3><p></p>";
    d.querySelector("small").textContent = m.quando;
    d.querySelector("h3").textContent = m.titulo;
    d.querySelector("p").textContent = m.texto;
    $("marcos").appendChild(d);
  });

  HISTORIA.galeria.forEach(g => {
    const f = document.createElement("figure");
    f.appendChild(caixa(g.foto, g.legenda));
    const c = document.createElement("figcaption"); c.textContent = g.legenda; f.appendChild(c);
    $("galeria").appendChild(f);
  });
})();
