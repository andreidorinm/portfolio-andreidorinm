const path = require("path");

module.exports = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'seeklogo.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fotp3-2.fna.fbcdn.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.vasonim.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.remix.cool',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.vasonim.com',
        pathname: '**',


      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'csie.ase.ro',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
        pathname: '**',
      },
    ],
  },
};
