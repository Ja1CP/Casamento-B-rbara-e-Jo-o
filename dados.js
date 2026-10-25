/* =====================================================================
   ARQUIVO DE DADOS: é o único que você precisa editar no dia a dia.
   Cuidado para não apagar aspas ("), vírgulas (,) nem colchetes [ ].
   ===================================================================== */

const DADOS = {
  noiva: "Bárbara",
  noivo: "João Vitor",
  data: "11 de dezembro de 2026",
  horario: "15h30",
  dataISO: "2026-12-11T15:30:00-03:00", // usada na contagem regressiva (ano-mês-diaThora)
  local: "Por Amor Recepções",
  endereco: "Av. Litorânea, nº 1209",
  cidade: "Extremoz",
  estado: "Rio Grande do Norte",
  mapa: "https://www.google.com/maps/search/?api=1&query=Por+Amor+Recep%C3%A7%C3%B5es+Av.+Litor%C3%A2nea+1209+Extremoz+RN",
  versiculo: "“Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.”",
  referencia: "Colossenses 3:14",

  // Pix: use só letras maiúsculas sem acento no nome e na cidade
  pix: { chave: "04635686051", nome: "BARBARA E JOAO VITOR", cidade: "EXTREMOZ" }
};

/* LISTA DE PRESENTES
   Cada item é: ["Nome do presente", valor, "ícone", "foto (opcional)"]
   - valor: use ponto nos centavos (150 ou 150.50). Escreva null para o convidado digitar o valor.
   - ícone: um emoji que aparece no lugar da foto.
   - foto (opcional): caminho de uma imagem, por exemplo "assets/presentes/air-fryer.jpg",
     ou o endereço de uma imagem na internet. Se a foto não carregar, aparece o ícone.
   Para remover um item, apague a linha inteira. Para criar categoria, copie um bloco. */
const CATEGORIAS = [
  { nome: "Casa e Lavanderia", itens: [
    ["Tábua de Passar Roupas", 150, "👔", "tabua-de-passar.jpg"],
    ["Ferro de Passar Roupas", 200, "👕", "ferro-de-passar.jpg"],
    ["Varal de Chão", 150, "🧺", "varal-de-chao.jpg"],
    ["Aspirador de Pó Robô", 750, "🤖", "aspirador-robo.jpg"],
    ["Mop Electrolux", 150, "🧹", "mop-electrolux.jpg"],
    ["Furadeira", 300, "🔧", "furadeira.jpg"]
  ]},
  { nome: "Quarto e Banho", itens: [
    ["Espelho Grande para quarto", 200, "🪞", "espelho-quarto.jpg"],
    ["Duas Mesas de Cabeceira", 400, "🛏️", "mesas-de-cabeceira.jpg"],
    ["Jogo de Cama", 200, "🛏️", "jogo-de-cama.jpg"],
    ["Colchas de Cama", 150, "🛌", "colchas-de-cama.jpg"],
    ["Kit de Toalhas de Banho e Mão", 200, "🛁", "toalhas.jpg"]
  ]},
  { nome: "Mesa e Cozinha", itens: [
    ["Faqueiro", 300, "🍴", "faqueiro.jpg"],
    ["Kit de Copos", 100, "🥛", "copos.jpg"],
    ["Kit de Taças de Vinho", 100, "🍷", "tacas-vinho.jpg"],
    ["Kit de Assadeiras", 300, "🥘", "assadeiras.jpg"],
    ["Kit de Panelas", 600, "🍲", "panelas.jpg"],
    ["Jogo de Jantar", 700, "🍽️", "jogo-de-jantar.jpg"],
    ["Kit de Potes para mantimentos", 150, "🫙", "potes-mantimentos.jpg"],
    ["Kit de potes de vidro herméticos", 80, "🫙", "potes-hermeticos.jpg"],
    ["Porta temperos", 80, "🧂", "temperos.jpg"]
  ]},
  { nome: "Eletroportáteis", itens: [
    ["Chaleira Elétrica", 150, "☕", "chaleira-eletrica.jpg"],
    ["Panela de pressão elétrica Electrolux", 600, "🍲", "panela-pressao.jpg"],
    ["Panela de arroz elétrica", 350, "🍚", "panela-arroz.jpg"],
    ["Air Fryer", 550, "🍟", "air-fryer.jpg"],
    ["Batedeira", 400, "🧁", "batedeira.jpg"],
    ["Cafeteira Cápsulas", 500, "☕", "cafeteira.jpg"],
    ["Multiprocessador", 400, "🥕", "multiprocessador.jpg"],
    ["Grill/Sanduicheira", 150, "🥪", "sanduicheira.jpg"],
    ["Ventilador", 150, "🌀", "ventilador.jpg"]
  ]},
  { nome: "Sala e Eletrodomésticos", itens: [
    ["Sofá", 2500, "🛋️", "sofa.jpg"],
    ["Rack", 1500, "📺", "rack.jpg"],
    ["Tevê", 2500, "📺", "televisao.jpg"],
    ["Fogão", 1600, "🔥", "fogao.jpg"],
    ["Máquina de Lavar Louça", 3500, "🍽️", "maquina-lavar-louca.jpg"],
    ["Máquina de Lavar Roupa", 3500, "🧼", "maquina-lavar-roupa.jpg"],
    ["Geladeira", 4000, "🧊", "geladeira.jpg"]
  ]}
];

/* PÁGINA "NOSSA HISTÓRIA" (nossa-historia.html)
   Troque os textos de exemplo pelos de vocês. Fotos: coloque os arquivos na pasta assets/fotos
   e escreva o caminho (ex.: "assets/fotos/barbara.jpg"). Sem foto, aparece um quadro com o monograma.
   Para tirar um marco ou uma foto da galeria, apague o bloco entre { }. Para incluir, copie um bloco. */
const HISTORIA = {
  intro: "Um pouquinho de quem somos e de como a nossa história começou.",
  noivos: [
    { nome: "Bárbara",    foto: "assets/fotos/barbara.jpg",
      texto: "Escreva aqui uma apresentação curta da Bárbara: o que ela ama, como é, o que a faz sorrir." },
    { nome: "João Vitor", foto: "assets/fotos/joao-vitor.jpg",
      texto: "Escreva aqui uma apresentação curta do João Vitor: o que ele ama, como é, o que o faz sorrir." }
  ],
  tituloHistoria: "Nossa história",
  marcos: [
    { quando: "A data",  titulo: "Como nos conhecemos", texto: "Conte aqui, em poucas linhas, onde e como vocês se conheceram." },
    { quando: "A data",  titulo: "O primeiro encontro", texto: "Conte aqui como foi o primeiro encontro ou o momento em que perceberam que era especial." },
    { quando: "A data",  titulo: "O pedido",            texto: "Conte aqui como foi o pedido de namoro ou de noivado." },
    { quando: "11 de dezembro de 2026", titulo: "O grande dia", texto: "Será uma alegria dividir esse dia com você." }
  ],
  tituloGaleria: "Momentos nossos",
  galeria: [
    { foto: "assets/fotos/foto-1.jpg", legenda: "Legenda da foto" },
    { foto: "assets/fotos/foto-2.jpg", legenda: "Legenda da foto" },
    { foto: "assets/fotos/foto-3.jpg", legenda: "Legenda da foto" },
    { foto: "assets/fotos/foto-4.jpg", legenda: "Legenda da foto" },
    { foto: "assets/fotos/foto-5.jpg", legenda: "Legenda da foto" },
    { foto: "assets/fotos/foto-6.jpg", legenda: "Legenda da foto" }
  ]
};

/* PAGAMENTO NO CARTÃO (InfinitePay)
   Crie um link de pagamento para cada presente (com o valor do item) e cole abaixo,
   no formato  "Nome exato do presente": "link",
   O botão "Pagar no cartão" só aparece nos presentes que têm link aqui. */
const LINKS_CARTAO = {
  "Tábua de Passar Roupas": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTYtSQ-dCk5zC9aMw-150,00",
  "Ferro de Passar Roupas": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTYtSQ-vdPXCmjCJS-200,00",
  "Varal de Chão": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTYtSQ-TDd4ugD3sj-150,00",
  "Aspirador de Pó Robô": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTgtSQ-Ob2DlhrTWf-750,00",
  "Mop Electrolux": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTYtSQ-9VI5cq6v9y-150,00",
  "Furadeira": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTUtSQ-AlQ5QiFx5t-300,00",
  "Espelho Grande para quarto": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTUtSQ-2BEZJbmc20-200,00",
  "Duas Mesas de Cabeceira": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTctSQ-ILu7dzSqJl-400,00",
  "Jogo de Cama": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTUtSQ-ATB2XZZJPl-200,00",
  "Colchas de Cama": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTMtSQ-5j2QLDQZRf-150,00",
  "Kit de Toalhas de Banho e Mão": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTQtSQ-jqjn52YNXq-200,00",
  "Faqueiro": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTUtSQ-YcrqHgvccn-300,00",
  "Kit de Copos": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTMtSQ-qgK0EXuM3F-100,00",
  "Kit de Taças de Vinho": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTMtSQ-jDnXhhegBl-100,00",
  "Kit de Assadeiras": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTYtSQ-9IUx1r0crS-300,00",
  "Kit de Panelas": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTctSQ-35ZI8eRklY-600,00",
  "Jogo de Jantar": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTctSQ-JF5xonRrE8-700,00",
  "Kit de Potes para mantimentos": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTMtSQ-OHRSZ1CIxc-150,00",
  "Kit de potes de vidro herméticos": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTItSQ-lGsIe0mi7K-80,00",
  "Porta temperos": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTItSQ-80,00",
  "Chaleira Elétrica": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTMtSQ-71ZDGcMXtb-150,00",
  "Panela de pressão elétrica Electrolux": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTYtSQ-OO03i52tPn-600,00",
  "Panela de arroz elétrica": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTQtSQ-MCn8QJBWQ1-350,00",
  "Air Fryer": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTYtSQ-mXaN80y2XK-550,00",
  "Batedeira": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTYtSQ-gxNDqiI6r2-400,00",
  "Cafeteira Cápsulas": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTYtSQ-8mfw8l8oyk-500,00",
  "Multiprocessador": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTctSQ-Tu4hwHwRoX-400,00",
  "Grill/Sanduicheira": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTUtSQ-IoF6I1oaqp-150,00",
  "Ventilador": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLTUtSQ-0ZNK8bRREj-150,00",
  "Sofá": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLUEtSQ-HUN3ch5b8x-2500,00",
  "Rack": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLUEtSQ-o5UxZXAm7U-1500,00",
  "Tevê": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLUEtSQ-BvyxQBEdM2-2500,00",
  "Fogão": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLUEtSQ-sW1hwNo1Od-1600,00",
  "Máquina de Lavar Louça": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLUEtSQ-xoEdi1iam5-3500,00",
  "Máquina de Lavar Roupa": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLUEtSQ-XdRNFc5GeP-3500,00",
  "Geladeira": "https://link.infinitepay.io/joao-vitor-g3f/VC1DLUEtSQ-TNeyWKBlu3-4000,00"
};
