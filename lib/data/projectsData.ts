// projectsData.ts
interface ProjectData {
  title: string;
  tagline?: string;
  detailedDescription?: string;
  technologies?: string[];
  url: string;
}

const projectsData: ProjectData[] = [
  {
    title: "RegularizaYa",
    tagline: "Immigration Management Platform",
    detailedDescription: "Immigration regularization platform built with modern tech stack, helping users manage their documentation and appointments efficiently.",
    technologies: [
      '/assets/react.svg',
      '/assets/nodejs.svg',
      '/assets/google-cloud.svg',
      '/assets/tailwind.svg',
    ],
    url: "https://immigration-regularization.web.app/",
  },
  {
    title: "ClarFactura",
    tagline: "Easy, Simple, Seamless Conversion",
    detailedDescription: "Invoice Conversion App to convert ANAF's eFactură XML files to Excel, with OCR integration for PDF invoices.",
    technologies: [
      '/assets/electron.svg',
      '/assets/aws.svg',
      '/assets/react.svg',
      '/assets/nodejs.svg',
    ],
    url: "https://invoice-app-website.vercel.app/",
  },
  {
    title: "Piata de NFT",
    tagline: "Artistic, Decentralized, Secure",
    detailedDescription: "Next.js NFT marketplace with Piñata for decentralized storage and Solidity smart contracts.",
    technologies: [
      '/assets/nextjs.svg',
      '/assets/metamask.svg',
      '/assets/ethereum.svg',
      '/assets/react.svg',
    ],
    url: "https://project-nft-last.vercel.app/",
  },
  {
    title: "Trilogy Optic Shopify",
    tagline: "Stable, Scalable, Efficient",
    detailedDescription: "Migrated e-commerce platform from custom MERN stack to Shopify for better performance.",
    technologies: [
      '/assets/shopify.svg',
      '/assets/selenium.png',
      '/assets/python.svg',
      '/assets/nodejs.svg',
    ],
    url: "https://trilogyoptic.art/",
  },
  {
    title: "Trilogy Optic MERN",
    tagline: "Advanced, Streamlined, Reliable",
    detailedDescription: "E-commerce site using MERN stack and TypeScript with PayPal integration.",
    technologies: [
      '/assets/react.svg',
      '/assets/redux.svg',
      '/assets/mongodb.svg',
      '/assets/nodejs.svg',
    ],
    url: "https://trilogyoptic-fe.onrender.com",
  },
  {
    title: "ERASMUS+ School",
    tagline: "Education, European, Intuitive",
    detailedDescription: "A web application for educational institutions in the ERASMUS+ program, developed with Vue.js to provide a user-friendly interface for students and educators.",
    technologies: [
      '/assets/vuejs.svg',
      '/assets/vite.svg',
      '/assets/tailwind.svg',
      '/assets/postcss.svg',
    ],
    url: "https://erasmussfantulnicolae.ro/",
  }
];

export default projectsData;
