module.exports = {
  images: {
    remotePatterns: [
      new URL('https://images.ctfassets.net/**'),
      new URL('https://placecats.com/**'),
    ],
  },
  allowedDevOrigins: [
    'local-origin.dev',
    '*.local-origin.dev',
    '192.168.0.200',
  ],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
