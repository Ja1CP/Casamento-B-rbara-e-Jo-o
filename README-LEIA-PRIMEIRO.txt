SITE DE CASAMENTO — BÁRBARA & JOÃO VITOR
==========================================

O que já está incluído:
- Página com visual clássico-romântico: marfim, bordô, dourado e verde-sálvia.
- Data e local conforme o convite enviado.
- Lista carregada do Supabase.
- Campo de pesquisa de presentes.
- Botão Presentear com formulário de nome.
- Chamada à função reserve_gift já criada no banco.
- Layout adaptado para celular.

IMPORTANTE: o Pix e a confirmação de pagamento ainda NÃO estão implementados.
O estado de disponibilidade também ainda não é exibido para todos os visitantes.
Não publique como pronto para convidados até terminar a configuração de segurança e testes.

PASSO 1 — CONFIGURAR A CONEXÃO
1. Abra a pasta js e edite config.js com um editor de texto (por exemplo, Bloco de Notas ou VS Code).
2. Troque:
   COLE_AQUI_SEU_PROJECT_URL
   pela Project URL do Supabase.
3. Troque:
   COLE_AQUI_SUA_CHAVE_PUBLICA
   pela chave pública (sb_publishable_... ou anon antiga).
4. Salve o arquivo.
Não coloque senha do banco, service_role ou secret key no site.

PASSO 2 — PUBLICAR NO GITHUB PAGES
1. Entre em https://github.com e crie um repositório chamado casamento.
2. Envie todos os arquivos e pastas deste pacote para o repositório (não envie só o ZIP).
3. No repositório, abra Settings > Pages.
4. Em Build and deployment, escolha Deploy from a branch.
5. Escolha a branch main e a pasta / (root); salve.
6. Aguarde o GitHub mostrar o endereço publicado.

PASSO 3 — SE A LISTA NÃO CARREGAR
- Confira a Project URL e a chave pública em js/config.js.
- No Supabase, a tabela public.gifts precisa permitir SELECT de presentes ativos para anon (a política criada anteriormente).
- Confira se o projeto está ativo e se o navegador mostra erros no console.

SEGURANÇA ANTES DE USAR COM CONVIDADOS
A função reserve_gift usa SECURITY DEFINER e recebe chamadas de visitantes anônimos. Antes de publicar, revise e teste a função e as permissões do banco. O código atual faz a reserva pelo RPC, mas não exibe publicamente reservas nem impede abuso automatizado. A política de leitura da tabela gift_reservations deve permanecer fechada para visitantes. Para um site real, recomendamos adicionar limite de tentativas e uma visão/função pública que exponha somente o status, sem nomes dos convidados.

PIX
O site ainda não gera Pix nem verifica pagamento. Para gerar um Pix dinâmico e confirmar o recebimento automaticamente, é preciso integrar com um banco/provedor que ofereça API Pix e notificações de pagamento. Nunca coloque credenciais secretas no JavaScript do navegador.
