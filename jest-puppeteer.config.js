module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: process.env.HEADLESS !== 'false' ? 0 : 200,
    devtools: process.env.HEADLESS === false && process.env.DEVTOOLS === 'true',
  },
}
