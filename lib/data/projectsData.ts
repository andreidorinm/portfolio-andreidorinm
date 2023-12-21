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
    title: "Trilogy Optic",
    tagline: "Advanced, Streamlined, Reliable",
    detailedDescription: "Developed Trilogy Optic's e-commerce site using MERN stack and TypeScript, focusing on user experience and maintainability, including PayPal integration.",
    technologies: ['https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png',
      'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
      'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
      ,],
    url: "https://trilogyoptic.art/",
  },
  // {
  //   title: "Proiect European",
  //   tagline: "Work in progress",
  //   detailedDescription: "Work in progress",
  //   technologies: [,
  //     'https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png',
  //   ],
  //   url: "https://vault3.live",
  // }
];

export default projectsData;
