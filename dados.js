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
    ["Ferro de Passar Roupas", 200, "👕"], "ferro_de_passar.jpg"],
    ["Varal de Chão", 150, "🧺"],
    ["Aspirador de Pó Robô", 750, "🤖"],
    ["Mop Electrolux", 150, "🧹"],
    ["Furadeira", 300, "🔧"]
  ]},
  { nome: "Quarto e Banho", itens: [
    ["Espelho Grande para quarto", 200, "🪞"],
    ["Duas Mesas de Cabeceira", 400, "🛏️"],
    ["Jogo de Cama", 200, "🛏️"],
    ["Colchas de Cama", 150, "🛌"],
    ["Kit de Toalhas de Banho e Mão", 200, "🛁"]
  ]},
  { nome: "Mesa e Cozinha", itens: [
    ["Faqueiro", 300, "🍴"],
    ["Kit de Copos", 100, "🥛"],
    ["Kit de Taças de Vinho", 100, "🍷"],
    ["Kit de Assadeiras", 300, "🥘"],
    ["Kit de Panelas", 600, "🍲"],
    ["Jogo de Jantar", 700, "🍽️"],
    ["Kit de Potes para mantimentos", 150, "🫙"],
    ["Kit de potes de vidro herméticos", 80, "🫙"],
    ["Porta temperos", 80, "🧂"]
  ]},
  { nome: "Eletroportáteis", itens: [
    ["Chaleira Elétrica", 150, "☕"],
    ["Panela de pressão elétrica Electrolux", 600, "🍲"],
    ["Panela de arroz elétrica", 350, "🍚"],
    ["Air Fryer", 550, "🍟"],
    ["Batedeira", 400, "🧁"],
    ["Cafeteira Cápsulas", 500, "☕"],
    ["Multiprocessador", 400, "🥕"],
    ["Grill/Sanduicheira", null, "🥪"],
    ["Ventilador", null, "🌀"]
  ]},
  { nome: "Sala e Eletrodomésticos", itens: [
    ["Sofá", null, "🛋️"],
    ["Rack", null, "📺"],
    ["Tevê", 2000, "📺"],
    ["Fogão", 1600, "🔥"],
    ["Máquina de Lavar Louça", 4000, "🍽️"],
    ["Máquina de Lavar Roupa", 3500, "🧼"],
    ["Geladeira", 4500, "🧊"]
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

/* PAGAMENTO NO CARTÃO (Mercado Pago)
   Crie um "Link de pagamento" no Mercado Pago para cada presente (com o valor do item)
   e cole o link abaixo, no formato  "Nome exato do presente": "link",
   Só aparece o botão "Pagar no cartão" nos presentes que tiverem link aqui. */
const LINKS_CARTAO = {
  // "Air Fryer": "https://mpago.la/xxxxxxx",
  // "Geladeira": "https://mpago.la/yyyyyyy",
};
