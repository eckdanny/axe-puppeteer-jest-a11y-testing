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
      <AnchorLink tag="h3" id="some-h3">
        I'm an H3
      </AnchorLink>
      <p>So far so good. No problems yet!</p>
      <AnchorLink tag="h5" id="some-h5">
        I'm an H5
      </AnchorLink>
      <p>Oh nos! Heading levels should only increase by one.</p>
    </div>
  )
}

export default SomeContent
