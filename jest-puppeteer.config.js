const RUN_SERVER = process.env.RUN_SERVER === 'TRUE'

const serverConfigBlock = RUN_SERVER && {
  server: {
    command: 'yarn serve -s -l 3000 build',
    port: 3000,
  },
}

module.exports = {
  ...serverConfigBlock,
  launch: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: process.env.HEADLESS !== 'false' ? 0 : 200,
    devtools: process.env.HEADLESS === false && process.env.DEVTOOLS === 'true',
  },
}
