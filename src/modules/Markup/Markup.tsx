import React from 'react'
import AnchorLink from '../../components/AnchorLink'

const DupeId = (
  <span id="foo">
    <code>&lt;span id="foo" /&gt;</code>
  </span>
)

const Markup: React.FC = () => {
  return (
    <div className="container">
      <AnchorLink id="markup" tag="h2">
        Markup
      </AnchorLink>
      <p className="lead">
        Let's look at easy-to-catch semantic and attribute usage issues...
      </p>
      <AnchorLink id="duplicate-ids" tag="h3">
        Duplicate <code>id</code> attributes
      </AnchorLink>
      <p>
        <em>Oops!</em> You can't have two of these in the document
      </p>
      <ul>
        <li> {DupeId} </li>
        <li> {DupeId} </li>
      </ul>
      <AnchorLink id="bad-aria" tag="h3">
        Valid ARIA attributes
      </AnchorLink>
      <p>
        How about this span:{' '}
        <code>&lt;span aria-secret-of-life="42" /&gt;</code>
        <span aria-secret-of-life="42" />
      </p>
    </div>
  )
}

export default Markup
