import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lsrecrutamento.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Recrutamento e Seleção para Empresas | LS Consultoria",
    template: "%s | LS Consultoria",
  },
  description: "Recrutamento e Seleção B2B em todo o Brasil, com alinhamento, captação, triagem, entrevistas e shortlist. Processos a partir de R$ 1.490.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-ls-consultoria.webp",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "LS Consultoria Tributária e Contábil",
    title: "Recrutamento e Seleção para Empresas | LS Consultoria",
    description: "Sua empresa recebe candidatos previamente avaliados e uma shortlist organizada. Atendimento em todo o Brasil.",
    images: [{ url: "/og-ls-recrutamento.jpg", width: 1200, height: 630, alt: "Recrutamento e Seleção B2B da LS Consultoria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recrutamento e Seleção para Empresas | LS Consultoria",
    description: "Candidatos previamente avaliados para sua empresa decidir com mais segurança.",
    images: ["/og-ls-recrutamento.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18345572022" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18345572022');

              document.addEventListener('click', function(event) {
                var target = event.target;
                if (!target || !target.closest) return;

                var whatsappLink = target.closest(
                  'a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp.com"]'
                );

                if (!whatsappLink) return;

                gtag('event', 'conversion', {
                  'send_to': 'AW-18345572022/ZowACMWr5dccELbt7KtE',
                  'value': 0.0,
                  'currency': 'BRL'
                });
              }, true);
            `,
          }}
        />
        <link rel="preload" as="image" href="/hero-recruitment-b2b-mobile.webp" media="(max-width: 760px)" />
        <link rel="preload" as="image" href="/hero-recruitment-b2b.webp" media="(min-width: 761px)" />
      </head>
      <body>{children}</body>
    </html>
  );
}
