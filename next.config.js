const path = require('path')

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["th", "en"],
    defaultLocale: "en",
    localeDetection: false,
  },
  publicRuntimeConfig: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    BASE_URL: process.env.BASE_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
