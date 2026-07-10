import "./globals.css";

export const metadata = {
  title: "Adroit Design | Corporate & Commercial Interior Design and Turnkey Fit-Out Contractors",
  description:
    "Adroit Design is a corporate & commercial interior design company delivering end-to-end turnkey interior projects — office interiors, retail fit-outs, showrooms and workspace design, from concept to handover.",
  keywords:
    "corporate interior design company, commercial interior design services, turnkey interior projects, office interior design, office fit-out contractor, retail interior design, showroom interior design, workspace design company, turnkey fit-out contractor, interior design and build firm",
  openGraph: {
    title: "Adroit Design | Corporate & Commercial Interior Design and Turnkey Projects",
    description:
      "End-to-end corporate and commercial interior design — from concept and blueprint to fully built, ready-to-move-in spaces. One team, one accountability, zero handoffs.",
    url: "https://www.adroitdesign.example/",
    siteName: "Adroit Design",
    images: [
      {
        url: "https://www.adroitdesign.example/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adroit Design",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adroit Design | Corporate & Commercial Interior Design and Turnkey Projects",
    description:
      "End-to-end corporate and commercial interior design — from concept and blueprint to fully built, ready-to-move-in spaces.",
  },
  alternates: {
    canonical: "https://www.adroitdesign.example/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignFirm",
  name: "Adroit Design",
  description:
    "Corporate and commercial interior design company offering end-to-end turnkey interior fit-out projects for offices, retail spaces and showrooms.",
  url: "https://www.adroitdesign.example/",
  telephone: "+91-90000-00000",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Add your office address here",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600000",
    addressCountry: "IN",
  },
  areaServed: "Chennai, Tamil Nadu, India",
  sameAs: [
    "https://www.instagram.com/adroitdesign",
    "https://www.linkedin.com/company/adroitdesign",
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a turnkey interior project mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A turnkey interior project means Adroit Design handles every stage of your space — design, approvals, civil work, electrical, furniture, and finishing — under one contract, so you receive a ready-to-use space without coordinating multiple vendors.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between corporate and commercial interior design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Corporate interior design focuses on offices, headquarters and workspaces built around productivity and brand identity. Commercial interior design covers a wider range of business spaces such as retail stores, showrooms, restaurants and clinics, each with its own functional and customer-facing needs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical office fit-out take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most office fit-outs with Adroit Design are completed in 6 to 12 weeks depending on the built-up area, scope of civil work, and approval timelines, with a detailed schedule shared before execution begins.",
      },
    },
    {
      "@type": "Question",
      name: "Does Adroit Design handle both design and construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Adroit Design is a design-and-build firm, which means the same team that designs your space also executes the civil, MEP and finishing work, removing the gap between design intent and site reality.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
