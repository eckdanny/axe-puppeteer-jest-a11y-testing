import { AxePuppeteer } from 'axe-puppeteer'
import { mkPathFn } from './utils'
const path = mkPathFn({ port: 3000 })

describe('Content Route', () => {
  it('is accessible', async () => {
    await page.goto(path('/content'))
    const results = await new AxePuppeteer(page).analyze()
    expect(results.violations).toHaveLength(0)
  })
})
