# Site do casamento: Bárbara & João Vitor

Site estático (sem servidor): capa, lista de presentes com Pix e a página "Nossa história".

## Arquivos
| Arquivo | Para que serve | Precisa editar? |
|---|---|---|
| `dados.js` | Nomes, data, local, Pix, **lista de presentes** e **textos/fotos da página Nossa história** | **Sim, é o principal** |
| `index.html` | Página principal (capa + presentes) | Raramente |
| `nossa-historia.html` + `historia.js` | Página de apresentação dos noivos | Raramente |
| `estilo.css` | Cores, fontes, layout (as imagens do monograma já estão dentro) | Só para mudar o visual |
| `app.js` | Funcionamento da lista, Pix e QR Code | Não |
| `assets/presentes/` | Fotos dos presentes (opcional) | Ao adicionar fotos |
| `assets/fotos/` | Fotos dos noivos e da galeria | Ao adicionar fotos |
| `originais/` | Cópia do monograma. **Não precisa subir** | Não |

## Como publicar/atualizar pelo navegador (sem instalar nada)
1. Entre no repositório: https://github.com/ja1cp/Casamento-B-rbara-e-Jo-o
2. **Add file → Upload files** e arraste: `index.html`, `nossa-historia.html`, `estilo.css`, `dados.js`, `app.js` e `historia.js`. Os que já existem são substituídos.
3. Role até o fim e clique em **Commit changes**.
4. Em **Settings → Pages**, confira que a origem é a branch `main` (pasta `/root`).
5. Aguarde 1 a 2 minutos e atualize com **Ctrl+F5** (no celular, use uma aba anônima).

## Como adicionar fotos
- Fotos dos noivos e da galeria: envie para a pasta `assets/fotos/` e confira em `dados.js` (bloco `HISTORIA`) se o nome do arquivo é o mesmo.
- Fotos dos presentes: envie para `assets/presentes/` e coloque o caminho no 4º campo do item, ex.: `["Air Fryer", 550, "🍟", "assets/presentes/air-fryer.jpg"]`. Também vale o endereço de uma imagem da internet. Sem foto, aparece o ícone.
- Como criar a pasta pelo navegador: **Add file → Create new file**, digite `assets/fotos/leia-me.txt` no nome (a barra cria a pasta), escreva qualquer texto e faça o commit. Depois abra a pasta e use **Add file → Upload files**. Também dá para arrastar a pasta inteira para a tela de upload.
- Nomes de arquivo sem espaço, sem acento e em minúsculas. Reduza as fotos antes (até uns 300 KB cada) para o site abrir rápido.

## Como mudar a lista de presentes depois
No GitHub, abra `dados.js`, clique no lápis, edite e faça **Commit changes**. Não apague aspas `"`, vírgulas `,` nem colchetes `[ ]`. Se o site ficar em branco, houve erro de digitação: reverta pela aba **History**.

## Pagamento no cartão (Mercado Pago)
1. No app ou no site do Mercado Pago, crie um **Link de pagamento** para cada presente, com o valor do item (e um título como "Presente de casamento: Air Fryer").
2. Cole cada link em `dados.js`, no bloco `LINKS_CARTAO`, assim: `"Air Fryer": "https://mpago.la/xxxxxxx",` (o nome precisa ser igual ao da lista).
3. Faça o commit. O botão "Pagar no cartão" aparece só nos presentes que têm link.

## Pix
- A chave fica em `dados.js` (`pix.chave`) e **fica visível para quem abrir o código do site**. Se não quiser expor o CPF, crie uma chave aleatória no app do banco e use essa.
- Teste sempre: gere o Pix de um item barato e confira valor e recebedor no app do banco antes de divulgar.

## Fontes
Cursiva: Imperial Script. Demais textos: Playfair Display. As duas vêm do Google Fonts, não precisa subir nada.

## Limites
- Sem servidor, o site não marca presentes como "já escolhidos" nem avisa quem pagou: acompanhe pelo extrato do Pix.
