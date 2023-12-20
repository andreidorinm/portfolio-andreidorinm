const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.discordapp.com",
      "i.scdn.co",
      "i.ibb.co",
      "seeklogo.com",
      "scontent.fotp3-2.fna.fbcdn.net",
      "www.vasonim.com",
      "www.remix.cool",
      "upload.wikimedia.org",
      "csie.ase.ro"
    ],
  },
};
