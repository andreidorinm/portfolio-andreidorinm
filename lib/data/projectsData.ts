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
    title: "ClarFactura",
    tagline: "Easy, Simple, Seamless Conversion",
    detailedDescription: "Developed the Invoice Conversion App to convert ANAF's eFactură XML files to Excel, compatible with popular invoicing software, and integrated OCR for seamless conversion of old PDF invoices.",
    technologies: [
      'https://seeklogo.com/images/E/electron-logo-5072143BD2-seeklogo.com.png',
      'https://d1.awsstatic.com/uki-digital-marketing-content-directory/AWS%20logo.884800f1674e960b6134af7340ac45ab21d99682.png',
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
      'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png',
      ,],
    url: "https://invoice-app-website.vercel.app/",
  },
  {
    title: "Piata de NFT",
    tagline: "Artistic, Decentralized, Secure",
    detailedDescription: "Created a Next.js NFT marketplace with Piñata for decentralized storage, using Solidity smart contracts and MetaMask for authentication and transactions.",
    technologies: [
      'https://res.cloudinary.com/practicaldev/image/fetch/s--RpUfSAFP--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8otweo5ef6kwc26rmxe5.png',
      'https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png',
      'https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg',
      'https://assets-global.website-files.com/629e4fe96456f8219203e7f1/62aceeed9b1218dc3d79f836_PINNY_01.png',
    ],
    url: "https://project-nft-last.vercel.app/",
  },
  {
    title: "Trilogy Optic Shopify",
    tagline: "Stable, Scalable, Efficient",
    detailedDescription: "Migrated Trilogy Optic's e-commerce platform from a custom MERN stack application to Shopify, enhancing functionality, user experience, and operational efficiency.",
    technologies: [
      'https://seeklogo.com/images/S/shopify-logo-1C711BCDE4-seeklogo.com.png',
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png',
      'https://pandas.pydata.org/static/img/pandas_mark_white.svg',
      'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
      ,],
    url: "https://trilogyoptic.art/",
  },
  {
    title: "Trilogy Optic MERN",
    tagline: "Advanced, Streamlined, Reliable",
    detailedDescription: "Developed Trilogy Optic's e-commerce site using MERN stack and TypeScript, focusing on user experience and maintainability, including PayPal integration.",
    technologies: ['https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png',
      'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
      'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
      ,],
    url: "https://trilogyoptic-fe.onrender.com",
  },
  {
    title: "ERASMUS+ School",
    tagline: "Education, European, Intuitive",
    detailedDescription: "A web application for educational institutions in the ERASMUS+ program, developed with Vue.js to provide a user-friendly interface for students and educators.",
    technologies: [
      'https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png',
      'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
      'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png',
      'https://seeklogo.com/images/P/postcss-logo-E142CA2A84-seeklogo.com.png'
    ],
    url: "https://erasmussfantulnicolae.ro/",
  }
];

export default projectsData;
