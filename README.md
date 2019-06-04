[![Netlify Status](https://api.netlify.com/api/v1/badges/4bffbc2f-63ff-4a09-93a8-b1c92e84f6a1/deploy-status)](https://app.netlify.com/sites/axe-puppeteer-jest-a11y-testing/deploys)

Demonstrative demo for using `axe` with `puppeteer` + `jest` and keeping humans focused on _usability_, not manual audits and remediation.

<p align='center'>
<img src='https://raw.githubusercontent.com/eckdanny/axe-puppeteer-jest-a11y-testing/master/.github/a11y-tests-in-axe-core.gif' width='600' alt='short demo screencast'>
</p>

## Up and Running

Grab the `axe` chrome extension from [chrome web store](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)

Get `docker` from [docker website](https://docs.docker.com/docker-for-mac/)

## Available Scripts

In the project directory, you can run:

### `yarn test:a11y`

Run the `axe` accessibility audit using `jest` in `puppeteer`.
