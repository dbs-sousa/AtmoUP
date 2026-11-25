# Deploy na Hostinger pelo GitHub

Repositório: `dbs-sousa/AtmoUP` (privado). Branch: `main`.

## Configuração do site na Hostinger

Para a modalidade de hospedagem com compilação de aplicações web pelo GitHub:

| Opção | Valor |
| --- | --- |
| Framework | Vite |
| Diretório raiz | Raiz do repositório |
| Comando de instalação | `npm ci` |
| Comando de build | `npm run build` |
| Diretório de saída | `dist` |

O script `build` está definido em `package.json`. O Vite gera o site estático em `dist` e copia os arquivos de `public`, incluindo `public/.htaccess`, para essa pasta.

Em hospedagem Apache/LiteSpeed que respeite `.htaccess`, essa configuração encaminha URLs internas para `index.html`, preservando o acesso direto às páginas. Em outra modalidade, configure na Hostinger o fallback de páginas para `index.html`.

## Publicação

1. Selecione o repositório e a branch acima na conexão GitHub já configurada na Hostinger.
2. Salve os valores de instalação, build e saída indicados na tabela.
3. Execute o deploy no painel; se a publicação automática estiver habilitada, novos commits em `main` podem dispará-lo.
4. Confira o domínio e abra diretamente `/equipamentos`, `/sobre` e `/contato`, recarregando cada página.

Não publique os arquivos-fonte diretamente em `public_html`: na hospedagem estática tradicional, publique apenas o conteúdo compilado de `dist`. A conexão Git tradicional, sem etapa de build, não compila o projeto por conta própria.

## Variáveis de ambiente

Os valores `VITE_*` são públicos e incorporados durante a compilação. Configure apenas valores destinados ao navegador, nunca credenciais privadas.

O recebimento real dos formulários depende de `VITE_LEAD_ENDPOINT`, que deve apontar para um serviço de recebimento válido. Sem esse canal, os formulários não enviam solicitações. Os contatos comerciais e o domínio definitivo também precisam ser configurados antes da publicação final; o envio ao GitHub não altera esses dados.

## Limites desta configuração

Este arquivo documenta as opções do deploy; não altera o painel da Hostinger nem confirma que a publicação foi executada. A conexão de envio sob demanda ao GitHub não é sincronização automática do projeto Lovable.
