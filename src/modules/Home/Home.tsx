import React from 'react'
import { RouteComponentProps } from '@reach/router'
import AnchorLink from '../../components/AnchorLink'

type HomeProps<T = {}> = React.HTMLAttributes<HTMLDivElement> &
  RouteComponentProps & {
    // Nothing here yet
  } & T

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container">
      <AnchorLink id="hello-world" tag="h2">
        Hello World
      </AnchorLink>
      <p className="lead">I am just a lonely demo...</p>
      <p>May Demonstrate:</p>
      <ul>
        <li>
          <code>puppeteer + jest + axe-core</code>
        </li>
        <li>
          some <code>a11y</code> failure modes
        </li>
        <li>
          <code>@reach-ui/router</code> features
        </li>
        <li>Using VoiceOver (Mac)</li>
        <li>
          <code>a11y</code> audits in CI with <code>docker</code>
        </li>
      </ul>
    </div>
  )
}

export default Home
