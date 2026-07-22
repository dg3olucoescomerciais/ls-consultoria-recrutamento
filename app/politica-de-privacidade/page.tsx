import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade e proteção de dados da LS Consultoria Tributária e Contábil.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <article className="legal-shell">
        <Link className="legal-back" href="/">← Voltar ao site</Link>
        <div className="updated">Última atualização: 22 de julho de 2026</div>
        <h1>Política de Privacidade</h1>
        <p>A LS CONSULTORIA TRIBUTARIA E CONTABIL LTDA, inscrita no CNPJ sob o nº 48.012.408/0001-00, respeita a privacidade de clientes, visitantes e pessoas que entram em contato por nossos canais. Esta política explica como tratamos dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais — LGPD.</p>

        <h2>1. Dados que podemos coletar</h2>
        <p>Podemos coletar nome, telefone, empresa, cidade, informações sobre a vaga, faixa salarial, urgência da contratação, mensagens enviadas e dados técnicos básicos de navegação quando ferramentas de mensuração estiverem ativas.</p>

        <h2>2. Finalidades do tratamento</h2>
        <p>Utilizamos os dados para analisar demandas de recrutamento, responder solicitações, entrar em contato por telefone ou WhatsApp, elaborar propostas, prestar os serviços contratados, manter registros de atendimento, proteger nossos canais e avaliar o desempenho das comunicações.</p>

        <h2>3. Bases legais</h2>
        <p>O tratamento poderá ocorrer mediante consentimento, para procedimentos preliminares relacionados à contratação, para execução de contrato, cumprimento de obrigação legal ou exercício de interesses legítimos, sempre conforme a legislação aplicável.</p>

        <h2>4. Compartilhamento</h2>
        <p>Os dados podem ser processados por fornecedores necessários à operação, como serviços de hospedagem, comunicação, formulários, mensuração e plataformas de publicidade. Também poderão ser compartilhados quando exigido por lei ou autoridade competente. Não comercializamos dados pessoais.</p>

        <h2>5. Armazenamento e segurança</h2>
        <p>Adotamos medidas administrativas e técnicas razoáveis para proteger os dados. As informações são mantidas pelo período necessário às finalidades informadas e aos prazos legais, contratuais ou de defesa de direitos.</p>

        <h2>6. Direitos do titular</h2>
        <p>Nos termos da LGPD, o titular pode solicitar confirmação do tratamento, acesso, correção, informação sobre compartilhamento, eliminação quando aplicável e revogação do consentimento, observadas as hipóteses legais de conservação.</p>

        <h2>7. Cookies e tecnologias de mensuração</h2>
        <p>Este site poderá utilizar recursos essenciais e, mediante configuração aplicável, tecnologias de mensuração como as ferramentas da Meta. O visitante poderá controlar cookies pelas configurações do navegador e pelos mecanismos de consentimento disponibilizados.</p>

        <h2>8. Contato</h2>
        <p>Para dúvidas ou solicitações relacionadas a dados pessoais, escreva para lscontabilidadebrasil@gmail.com ou fale pelo WhatsApp +55 61 98197-6920.</p>

        <h2>9. Identificação e endereço</h2>
        <p>LS CONSULTORIA TRIBUTARIA E CONTABIL LTDA — CNPJ 48.012.408/0001-00. Endereço: SCN Quadra 1, Bloco E, Edifício Central Park, Sala 601, Asa Norte, Brasília/DF, CEP 70711-050.</p>

        <h2>10. Atualizações</h2>
        <p>Esta política poderá ser atualizada para refletir mudanças operacionais ou legais. A versão vigente estará sempre disponível nesta página.</p>
      </article>
    </main>
  );
}
