import React from 'react'
import AnchorLink from '../../components/AnchorLink'

type SomeContentProps<T = {}> = {
  // Nothing here yet
} & T

const SomeContent: React.FC<SomeContentProps> = () => {
  return (
    <div className="container">
      <AnchorLink tag="h2" id="content">
        Content
      </AnchorLink>
      <p className="lead">
        Let's look a simple use case for finding structural type errors...
      </p>
      <p>
        Usually very clear if the solution-domain is in the library space or the
        application space.
      </p>

      <section>
        <AnchorLink tag="h3" id="proper-nesting">
          Proper nesting
        </AnchorLink>
        <p>
          Some things are better validated in integration wrather than at the
          component level:
        </p>
        <div className="card mb-3">
          <div className="card-body">
            <h4>I'm an H4</h4>
            <p>
              Coincidentally, no problems yet because the previous{' '}
              <code>heading</code> <em>happens</em> to be an H3.
            </p>
            <h6>I'm an H6</h6>
            <p className="mb-0">
              Oh nos! Heading levels should only increase by one.
            </p>
          </div>
        </div>
      </section>

      <section>
        <AnchorLink tag="h3" id="aria-regions">
          ARIA Regions
        </AnchorLink>
        <div role="main">
          What happens if there are multiple <code>[role="main"]</code>{' '}
          elements?
        </div>
      </section>

      <section>
        <AnchorLink id="skip-links" tag="h3">
          Skip Links
        </AnchorLink>
        <p>
          An immensely helpful feature for keyboard-assisted users. If you're
          shipping page-level templates or components, this feature can be an
          opaque interface to your consumers.
        </p>
      </section>

      <section>
        <AnchorLink id="focus-management-on-route-changes" tag="h3">
          Focus Management and Route Change Events in{' '}
          <abbr title="Single Page Applications">SPAs</abbr>
        </AnchorLink>
        <p>
          Route change events should place focus in active <em>shell</em>{' '}
          (either by declarative or imperative methods). With{' '}
          <code>reach-ui/router</code>, its done for you. Have you noticed this
          feature in action? If your program/project is consistent with a
          client-side routing solution, this can be another opaque feature.
        </p>
      </section>
    </div>
  )
}

export default SomeContent
