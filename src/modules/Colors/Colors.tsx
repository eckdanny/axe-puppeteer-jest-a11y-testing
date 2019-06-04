import React from 'react'
import AnchorLink from '../../components/AnchorLink'

const Btns = (
  <div className="d-flex flex-wrap justify-content-around my-3">
    {[
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map(str => (
      <button key={str} type="button" className={`btn btn-${str}`}>
        {str}
      </button>
    ))}
  </div>
)

const Colors: React.FC = () => {
  return (
    <div className="container">
      <AnchorLink id="color" tag="h2">
        Color
      </AnchorLink>
      <p className="lead">Let's look at simple color contrast issues...</p>
      <AnchorLink id="Buttons" tag="h3">
        Buttons
      </AnchorLink>

      <p>
        Behold the mighty <code>Button</code> component!
      </p>
      {Btns}
      <p>
        P.S. There are no exceptions for <code>:pseudo-class</code> states. If
        you're building a library, the combinatorial explosion of independent
        properties (size, color, disabled, psuedo-classes, ... ){' '}
        <em>can increase</em> quickly!
      </p>
    </div>
  )
}

export default Colors
