import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso e condições comerciais do site da LS Consultoria Tributária e Contábil.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermsOfUse() {
  return (
    <main className="legal-page">
      <article className="legal-shell">
        <Link className="legal-back" href="/">← Voltar ao site</Link>
        <div className="updated">Última atualização: 22 de julho de 2026</div>
        <h1>Termos de Uso</h1>
        <p>Ao utilizar este site, você declara estar ciente das condições abaixo. O conteúdo tem finalidade informativa e comercial sobre os serviços de Recrutamento e Seleção da LS CONSULTORIA TRIBUTARIA E CONTABIL LTDA, CNPJ 48.012.408/0001-00.</p>

        <h2>1. Informações comerciais</h2>
        <p>Valores, escopo, prazos, condições de pagamento e reposição dependem do enquadramento da vaga e da contratação formal. A proposta e o contrato prevalecem sobre informações resumidas apresentadas no site.</p>

        <h2>2. Condições da oferta de R$ 1.490</h2>
        <p>O valor é aplicável a processos para vagas operacionais, comerciais e administrativas, com remuneração de até R$ 3.000, desde que não sejam especializadas ou confidenciais. Avaliações técnicas pagas e testes externos não estão incluídos.</p>

        <h2>3. Processo e decisão</h2>
        <p>A LS conduz o recrutamento, realiza triagens e apresenta candidatos avaliados. A decisão final, a admissão e a gestão do vínculo profissional são de responsabilidade exclusiva da empresa contratante. Não há promessa de contratação perfeita, resultado garantido ou prazo impossível.</p>

        <h2>4. Reposição</h2>
        <p>A reposição é aplicável uma única vez, em até 30 dias após a admissão, para a mesma vaga e nas mesmas condições originalmente contratadas, conforme regras do contrato.</p>

        <h2>5. Propriedade intelectual</h2>
        <p>Textos, elementos visuais, marca e organização deste site são protegidos pela legislação aplicável e não podem ser reproduzidos comercialmente sem autorização.</p>

        <h2>6. Links externos</h2>
        <p>O site pode direcionar para WhatsApp, Instagram, Facebook ou outros serviços. A utilização dessas plataformas também está sujeita aos termos e políticas de seus respectivos operadores.</p>

        <h2>7. Legislação aplicável</h2>
        <p>Estes termos são regidos pela legislação brasileira. Eventuais questões serão tratadas conforme o contrato firmado e as normas legais aplicáveis.</p>

        <h2>8. Identificação e contato</h2>
        <p>LS CONSULTORIA TRIBUTARIA E CONTABIL LTDA — CNPJ 48.012.408/0001-00. Endereço: SCN Quadra 1, Bloco E, Edifício Central Park, Sala 601, Asa Norte, Brasília/DF, CEP 70711-050. E-mail: lscontabilidadebrasil@gmail.com.</p>
      </article>
    </main>
  );
}
