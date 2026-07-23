/* Imagens já otimizadas em WebP e servidas diretamente para exportação estática. */
/* eslint-disable @next/next/no-img-element */

const whatsappMessage =
  "Olá, represento uma empresa e vim pelo site da LS Consultoria. Gostaria de avaliar uma vaga que precisamos preencher.";
const whatsappUrl = `https://wa.me/5561981976920?text=${encodeURIComponent(whatsappMessage)}`;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lsrecrutamento.com.br";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LS Consultoria Tributária e Contábil",
  legalName: "LS CONSULTORIA TRIBUTARIA E CONTABIL LTDA",
  taxID: "48.012.408/0001-00",
  url: siteUrl,
  logo: `${siteUrl}/logo-ls-consultoria.webp`,
  email: "contato@lsrecrutamento.com.br",
  telephone: "+55 61 98197-6920",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SCN Quadra 1, Bloco E, Edifício Central Park, Sala 601",
    addressLocality: "Brasília",
    addressRegion: "DF",
    postalCode: "70711-050",
    addressCountry: "BR",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  sameAs: [
    "https://www.instagram.com/lscontabilidadebrasil/",
    "https://www.facebook.com/profile.php?id=61581975991467",
  ],
};

const processSteps = [
  ["01", "Alinhamento da vaga", "Entendemos o contexto, a rotina e o resultado esperado pela empresa."],
  ["02", "Definição do perfil", "Organizamos requisitos técnicos, comportamentais e condições da oportunidade."],
  ["03", "Divulgação e captação", "Ativamos os canais adequados e a mídia de captação prevista no contrato."],
  ["04", "Triagem e entrevistas", "Analisamos currículos, realizamos entrevistas telefônicas e validamos informações."],
  ["05", "Shortlist e apoio", "Apresentamos os perfis mais aderentes e apoiamos o agendamento com a empresa."],
];

const benefits = [
  "Reunião de alinhamento da vaga",
  "Definição do perfil profissional",
  "Divulgação e captação de candidatos",
  "Mídia de captação incluída como bônus",
  "Análise e triagem de currículos",
  "Entrevistas telefônicas",
  "Validação de informações profissionais",
  "Relatório e organização da shortlist",
  "Apoio no agendamento das entrevistas",
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#inicio" aria-label="LS Consultoria - início">
            <img
              className="brand-logo"
              src="/logo-ls-consultoria.webp"
              alt="Logo da LS Consultoria Tributária e Contábil"
              width={384}
              height={384}
            />
            <span className="brand-copy">
              <strong>LS Consultoria</strong>
              <small>Tributária e Contábil</small>
            </span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#processo">Como funciona</a>
            <a href="#servicos">Serviços</a>
            <a href="#investimento">Investimento</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="button button-outline header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-media">
          <picture>
            <source media="(max-width: 760px)" srcSet="/hero-recruitment-b2b-mobile.webp" />
            <img
              src="/hero-recruitment-b2b.webp"
              alt="Reunião profissional de recrutamento e seleção para empresas"
              width={1024}
              height={1536}
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="hero-shade" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">Recrutamento e Seleção B2B</div>
            <h1>
              Receba candidatos
              <span>previamente avaliados.</span>
            </h1>
            <p>
              A LS conduz o alinhamento, a captação, a triagem e as entrevistas. Sua empresa recebe uma shortlist organizada para tomar a decisão final.
            </p>
            <div className="hero-offer" aria-label="Investimento inicial">
              <span>Processos a partir de</span>
              <strong>R$ 1.490</strong>
              <span>por processo</span>
            </div>
            <div className="hero-actions">
              <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
                Quero avaliar minha vaga
              </a>
              <a className="button button-outline" href="#processo">
                Conhecer o processo
              </a>
            </div>
            <div className="hero-assurances">
              <span>Mídia de captação incluída</span>
              <span>Pagamento 50% + 50%</span>
              <span>Reposição prevista em contrato</span>
            </div>
            <p className="business-only-note">Exclusivo para empresas. Não recebemos currículos ou candidaturas por este canal.</p>
          </div>
        </div>
      </section>

      <section className="coverage-proof" aria-label="Atendimento e experiência">
        <div className="shell coverage-proof-inner">
          <div>
            <span className="coverage-label">Atendimento nacional</span>
            <strong>Recrutamento e Seleção para empresas em todo o Brasil.</strong>
          </div>
          <p>
            Experiência comprovada em recrutamento para empresas de diferentes portes e segmentos, incluindo operações das marcas <strong>Milk Moo</strong>, <strong>Democrata</strong> e <strong>Usaflex</strong>.
          </p>
        </div>
      </section>

      <section className="section problem-section">
        <div className="shell two-column">
          <div>
            <div className="section-kicker">Decisão com mais segurança</div>
            <h2>Contratar não precisa consumir a operação da sua empresa.</h2>
          </div>
          <div className="body-copy">
            <p>
              Analisar dezenas de currículos, lidar com candidatos sem aderência e conduzir entrevistas sem um método claro gera tempo perdido e desgaste para a gestão.
            </p>
            <p>
              A LS organiza as etapas do recrutamento e entrega uma seleção estruturada para que sua empresa concentre energia na decisão final.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section" id="processo">
        <div className="shell">
          <div className="section-heading centered">
            <div className="section-kicker">Como funciona</div>
            <h2>Um processo profissional do alinhamento à shortlist.</h2>
            <p>Cada etapa é conduzida com critério, organização e comunicação com a empresa.</p>
          </div>
          <div className="process-grid">
            {processSteps.map(([number, title, text]) => (
              <article className="process-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="shell two-column services-layout">
          <div>
            <div className="section-kicker">O que está incluído</div>
            <h2>Mais que divulgação de vaga ou recebimento de currículos.</h2>
            <p className="lead-copy">
              Sua empresa recebe candidatos analisados, entrevistados e organizados para uma decisão mais objetiva.
            </p>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Avaliar uma vaga com a equipe →
            </a>
          </div>
          <div className="benefit-list">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <span>✓</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="investimento">
        <div className="shell">
          <div className="section-heading centered">
            <div className="section-kicker">Investimento</div>
            <h2>Condições claras para diferentes níveis de contratação.</h2>
          </div>
          <div className="pricing-grid">
            <article className="price-card featured">
              <div className="card-label">Mais solicitado</div>
              <h3>Vagas operacionais, comerciais e administrativas</h3>
              <div className="card-price"><small>R$</small> 1.490</div>
              <p>Por processo, com direito a uma contratação.</p>
              <ul>
                <li>Remuneração da vaga de até R$ 3.000</li>
                <li>Vagas não especializadas e não confidenciais</li>
                <li>Mídia para captação incluída como bônus</li>
                <li>Uma reposição em até 30 dias, conforme contrato</li>
              </ul>
              <a className="button button-gold full-button" href={whatsappUrl} target="_blank" rel="noreferrer">
                Avaliar minha vaga
              </a>
              <p className="card-business-note">Atendimento exclusivo para empresas.</p>
            </article>
            <article className="price-card">
              <h3>Vagas técnicas e de supervisão</h3>
              <div className="card-price"><small>A partir de R$</small> 2.490</div>
              <p>Complexidade, requisitos e condições avaliados antes da contratação.</p>
              <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar análise →</a>
            </article>
            <article className="price-card">
              <h3>Vagas gerenciais</h3>
              <div className="card-price custom-price">Sob orçamento</div>
              <p>Proposta individual de acordo com nível de responsabilidade, confidencialidade e escopo.</p>
              <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar com a LS →</a>
            </article>
          </div>
          <div className="payment-strip">
            <strong>Forma de pagamento</strong>
            <span>50% na contratação e assinatura do serviço</span>
            <span>50% na apresentação da lista final de candidatos</span>
          </div>
        </div>
      </section>

      <section className="section replacement-section">
        <div className="shell replacement-card">
          <div className="replacement-number">30</div>
          <div>
            <div className="section-kicker">Reposição prevista em contrato</div>
            <h2>Uma reposição em até 30 dias após a admissão.</h2>
            <p>
              Aplicável uma única vez, para a mesma vaga e nas mesmas condições inicialmente contratadas. As demais regras constam no contrato do serviço.
            </p>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="duvidas">
        <div className="shell faq-layout">
          <div>
            <div className="section-kicker">Perguntas frequentes</div>
            <h2>Informações importantes antes de contratar.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>A LS garante que a contratação será perfeita?</summary>
              <p>Não. A LS conduz um processo profissional de recrutamento e apresenta candidatos avaliados. A decisão final de contratação permanece com a empresa.</p>
            </details>
            <details>
              <summary>O valor de R$ 1.490 vale para qualquer vaga?</summary>
              <p>Ele se aplica às vagas operacionais, comerciais e administrativas, não especializadas e não confidenciais, com remuneração de até R$ 3.000.</p>
            </details>
            <details>
              <summary>A mídia para captar candidatos está incluída?</summary>
              <p>Sim, a mídia de captação é incluída como bônus, conforme condições definidas no contrato.</p>
            </details>
            <details>
              <summary>Em quanto tempo receberei candidatos?</summary>
              <p>O prazo depende do perfil, da localidade, da remuneração e da disponibilidade de profissionais. O planejamento é definido no alinhamento, sem promessa de prazo impossível.</p>
            </details>
            <details>
              <summary>O que acontece depois que eu solicitar uma avaliação?</summary>
              <p>A equipe analisa a demanda, confirma as condições da vaga e apresenta a orientação comercial adequada antes da contratação.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <div className="section-kicker">Próximo passo</div>
            <h2>Conte qual vaga sua empresa precisa preencher.</h2>
            <p>Receba uma avaliação inicial da demanda e entenda o formato mais adequado para o processo.</p>
          </div>
          <div className="final-cta-action">
            <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
              Avaliar minha vaga no WhatsApp
            </a>
            <p className="final-business-note">Exclusivo para empresas. Não recebemos currículos.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="brand footer-brand">
            <img
              className="brand-logo"
              src="/logo-ls-consultoria.webp"
              alt="Logo da LS Consultoria Tributária e Contábil"
              width={384}
              height={384}
            />
            <span className="brand-copy"><strong>LS Consultoria</strong><small>Tributária e Contábil</small></span>
          </div>
          <p>
            Recrutamento e Seleção para empresas em todo o Brasil.<br />
            SCN Quadra 1, Bloco E, Ed. Central Park, Sala 601, Asa Norte, Brasília/DF — CEP 70711-050.
          </p>
          <div className="footer-links">
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            <a href="/termos-de-uso">Termos de Uso</a>
            <a href="https://www.instagram.com/lscontabilidadebrasil/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61581975991467" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <div className="shell copyright">
          LS CONSULTORIA TRIBUTARIA E CONTABIL LTDA · CNPJ 48.012.408/0001-00 · contato@lsrecrutamento.com.br<br />
          © 2026 LS Consultoria Tributária e Contábil. Todos os direitos reservados.
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a LS Consultoria pelo WhatsApp">
        WhatsApp
      </a>
    </main>
  );
}
