import PageSeo from "@/components/PageSeo";

const sectionTitle = "mt-10 mb-4 text-xl font-bold text-primary sm:text-2xl";
const list = "ml-5 list-disc space-y-2 pl-2 marker:text-primary";

export default function PoliticaPrivacidade() {
  return (
    <main className="bg-background py-14 sm:py-20">
      <PageSeo
        title="Política de Privacidade | AtmoUP"
        description="Saiba como a AtmoUP coleta, utiliza, armazena e protege os dados pessoais dos visitantes e contatos recebidos pelo site."
        path="/politica-de-privacidade"
      />

      <article className="container mx-auto max-w-4xl px-4 sm:px-6">
        <header className="border-b border-border pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-foreground">Privacidade e proteção de dados</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Política de Privacidade</h1>
          <p className="mt-4 text-sm text-muted-foreground">Última atualização: 26 de novembro de 2026</p>
        </header>

        <div className="space-y-5 pt-8 leading-relaxed text-foreground">
          <p>
            A sua privacidade é importante para nós. Esta Política de Privacidade explica como a AtmoUP Engenharia Industrial,
            inscrita no CNPJ sob o nº 32.767.706/0001-70, coleta, usa, armazena e protege os dados pessoais dos usuários que
            acessam o site www.atmoup.com.br, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </p>

          <section className="space-y-4" aria-labelledby="dados-coletados">
            <h2 id="dados-coletados" className={sectionTitle}>1. Quais dados coletamos e por quê</h2>
            <p>Coletamos os dados necessários para o funcionamento do site, o atendimento às solicitações e a análise de acesso:</p>
            <ul className={`${list} mt-4`}>
              <li>
                <strong>Dados fornecidos diretamente por você:</strong> nome, empresa, e-mail corporativo, tipo de necessidade e
                descrição da demanda. Telefone/WhatsApp, cargo, segmento e equipamento são opcionais.
                <br />
                <strong>Finalidade:</strong> responder às suas solicitações, avaliar a demanda técnica, manter o contato comercial
                solicitado e prestar os serviços contratados.
              </li>
              <li>
                <strong>Origem da solicitação e campanhas:</strong> página de origem e, quando presentes no endereço acessado, os
                parâmetros utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid e li_fat_id.
                <br />
                <strong>Finalidade:</strong> identificar a origem do contato e avaliar o desempenho das campanhas. Esses parâmetros
                podem ser mantidos no armazenamento da sessão do navegador e enviados com a solicitação; dados de contato não são
                gravados nesse armazenamento.
              </li>
              <li>
                <strong>Dados de navegação coletados automaticamente:</strong> páginas visitadas, origem da visita, país, navegador,
                sistema operacional, tipo de dispositivo, tempo de permanência, velocidade de carregamento, erros e cliques em
                botões e links.
                <br />
                <strong>Finalidade:</strong> garantir a segurança, melhorar a experiência de navegação e gerar estatísticas de acesso.
              </li>
            </ul>
          </section>

          <section className="space-y-4" aria-labelledby="cookies-estatisticas">
            <h2 id="cookies-estatisticas" className={sectionTitle}>2. Cookies, armazenamento da sessão e estatísticas</h2>
            <p>
              Após o envio bem-sucedido de um formulário, o site registra um evento de conversão na página de confirmação. Esse
              evento contém apenas a identificação do formulário e da conversão, sem nome, e-mail, telefone ou descrição da demanda.
            </p>
            <p>
              A análise de visitantes da Lovable registra páginas visitadas, origem da visita, país, navegador, sistema operacional,
              tipo de dispositivo, tempo de permanência, velocidade de carregamento, erros e cliques para todos os visitantes. Ela
              não usa cookies, não armazena informações no dispositivo do visitante, não conserva endereços IP e não identifica os
              visitantes. Os dados detalhados são mantidos por 90 dias e os resumos diários, por um ano.
            </p>
            <p>
              A Lovable coleta esses dados para nós. A <a href="https://lovable.dev/privacy" target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4">política de privacidade da Lovable</a> explica como ela os trata.
            </p>
            <p>
              O armazenamento da sessão do navegador é utilizado apenas para conservar temporariamente a origem e os parâmetros de
              campanha durante a navegação, além de evitar a contagem repetida da mesma conversão. Essas informações são apagadas
              quando a sessão do navegador termina. Você pode gerenciar os dados armazenados pelos sites nas configurações do navegador.
            </p>
          </section>

          <section className="space-y-4" aria-labelledby="compartilhamento">
            <h2 id="compartilhamento" className={sectionTitle}>3. Compartilhamento de dados</h2>
            <p>Não vendemos nem alugamos seus dados pessoais. Suas informações só poderão ser compartilhadas com:</p>
            <ul className={`${list} mt-4`}>
              <li>
                <strong>Fornecedores essenciais para a operação:</strong> a Hostinger, responsável pela hospedagem do site; o serviço
                configurado pela AtmoUP para receber e processar as solicitações dos formulários; e a Lovable, responsável pelas
                estatísticas de visitantes descritas nesta política. Esses fornecedores recebem somente os dados necessários às suas
                respectivas funções e estão sujeitos às suas próprias obrigações de privacidade e segurança.
              </li>
              <li>
                <strong>Google Fonts:</strong> ao carregar as fontes do site, seu navegador se conecta aos servidores do Google, que
                pode receber dados técnicos necessários à conexão, como o endereço IP e informações do navegador.
              </li>
              <li>
                <strong>WhatsApp:</strong> se você optar por abrir uma conversa pelo link disponível no site, a comunicação passa a
                ocorrer na plataforma do WhatsApp, sujeita aos termos e à política de privacidade desse serviço.
              </li>
              <li>
                <strong>Autoridades legais:</strong> quando houver obrigação legal, regulatória ou ordem judicial.
              </li>
            </ul>
          </section>

          <section className="space-y-4" aria-labelledby="armazenamento">
            <h2 id="armazenamento" className={sectionTitle}>4. Armazenamento e segurança</h2>
            <p>
              Adotamos medidas técnicas e administrativas de segurança, como certificados SSL/HTTPS e controle de acesso, para
              proteger seus dados contra acessos não autorizados, perda ou alteração. Os dados das solicitações são mantidos apenas
              pelo tempo necessário para cumprir as finalidades para as quais foram coletados, atender a obrigações legais ou exercer
              direitos em processos judiciais, administrativos ou arbitrais. Os prazos aplicáveis às estatísticas da Lovable estão
              descritos na seção 2.
            </p>
          </section>

          <section className="space-y-4" aria-labelledby="direitos">
            <h2 id="direitos" className={sectionTitle}>5. Seus direitos como titular dos dados (LGPD)</h2>
            <p>De acordo com a LGPD, você tem o direito de solicitar, nos termos da legislação aplicável:</p>
            <ul className={`${list} mt-4`}>
              <li>A confirmação de que tratamos seus dados e o acesso a eles;</li>
              <li>A correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>A anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;</li>
              <li>A portabilidade dos dados, observados os segredos comercial e industrial e a regulamentação aplicável;</li>
              <li>A eliminação dos dados tratados com consentimento, ressalvadas as hipóteses legais de conservação;</li>
              <li>A revogação do consentimento e informações sobre as consequências dessa decisão;</li>
              <li>Informações sobre as entidades públicas e privadas com as quais compartilhamos seus dados;</li>
              <li>A oposição a tratamentos realizados em desconformidade com a LGPD.</li>
            </ul>
          </section>

          <section aria-labelledby="contato-dpo" className="space-y-4 rounded-xl border border-border bg-muted/40 p-6 sm:p-8">
            <h2 id="contato-dpo" className="mb-4 text-xl font-bold text-primary sm:text-2xl">6. Contato e Encarregado de Dados (DPO)</h2>
            <p>Para exercer seus direitos ou tirar dúvidas sobre esta Política de Privacidade, entre em contato pelos canais abaixo:</p>
            <ul className={`${list} mt-4`}>
              <li><strong>Responsável / DPO:</strong> Dennis Batista</li>
              <li>
                <strong>E-mail:</strong>{' '}
                <a href="mailto:contato@atmoup.com.br" className="font-medium text-primary underline underline-offset-4">contato@atmoup.com.br</a>
              </li>
            </ul>
          </section>

          <section className="space-y-4" aria-labelledby="alteracoes">
            <h2 id="alteracoes" className={sectionTitle}>7. Alterações nesta Política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir melhorias no site ou mudanças na legislação.
              A data da última atualização será indicada no início desta página. Recomendamos que você a revise regularmente.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
