# Site do casamento: Bárbara & João Vitor

Site estático (sem servidor) com capa, lista de presentes e Pix com valor já preenchido.

## Arquivos
| Arquivo | Para que serve | Precisa editar? |
|---|---|---|
| `dados.js` | Nomes, data, local, Pix e **lista de presentes** | **Sim, é o principal** |
| `index.html` | Estrutura da página | Raramente |
| `estilo.css` | Cores, fontes e layout | Só para mudar o visual |
| `app.js` | Funcionamento (filtros, Pix, QR Code) | Não |

## Como publicar/atualizar pelo navegador (sem instalar nada)
1. Entre no repositório no GitHub: https://github.com/ja1cp/Casamento-B-rbara-e-Jo-o
2. Clique em **Add file → Upload files** e arraste os 4 arquivos (`index.html`, `estilo.css`, `dados.js`, `app.js`). Se já existirem com o mesmo nome, serão substituídos.
3. Role até o fim e clique em **Commit changes**.
4. Em **Settings → Pages**, confira que a origem é a branch `main` (pasta `/root`).
5. Aguarde 1 a 2 minutos e abra o site. Se não mudar, atualize com **Ctrl+F5** (no celular, limpe o cache ou abra em aba anônima).

## Como mudar a lista de presentes depois
1. No repositório, clique em `dados.js` e depois no ícone de **lápis** (Edit).
2. Altere nomes e valores (cada item é `["Nome", valor]`; `null` = valor livre).
3. Clique em **Commit changes**. O site atualiza sozinho em 1 a 2 minutos.

Atenção: não apague aspas `"`, vírgulas `,` nem colchetes `[ ]`. Se o site ficar em branco, houve um erro de digitação em `dados.js`: reverta pela aba **History**.

## Pix
- A chave fica em `dados.js` (`pix.chave`) e **fica visível para quem abrir o código do site**. Se não quiser expor o CPF, crie uma chave aleatória no app do banco e use essa.
- Teste sempre: gere o Pix de um item barato, confira valor e recebedor no app do banco antes de divulgar o link.

## Limites
- Sem servidor, o site não marca presentes como "já escolhidos" nem avisa quem pagou: acompanhe pelo extrato do Pix.
- Arquivos antigos do site anterior (se houver) podem ser apagados para evitar confusão.
