import React from 'react'
import AnchorLink from '../../components/AnchorLink'
import myImg from './lincoln-memorial.jpg'

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
      <p>Typically self-evident implementation or defect resolution.</p>

      <section>
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
      </section>

      <section>
        <AnchorLink id="bad-aria" tag="h3">
          Invalid ARIA attributes
        </AnchorLink>
        <p>
          Appropriate attributes may be inferred by the host DOM element. Some
          are just plain silly:
        </p>
        <p>
          Like this span: <code>&lt;span aria-secret-of-life="42" /&gt;</code>
          <span aria-secret-of-life="42" />
        </p>
      </section>

      <section>
        <AnchorLink id="simple-validations" tag="h3">
          More Simple AST-based Validations
        </AnchorLink>
        <p>
          shallow trees, associations between sibling elements, single
          elements...
        </p>

        <section>
          <AnchorLink id="image-attributes" tag="h4">
            Example: Image Attributes
          </AnchorLink>
          <p>
            Missing image alt text may be the <em>lowest</em> of low-hanging
            fruit:
          </p>
          <div className="text-center mb-3">
            <figure className="figure text-center">
              <img src={myImg} className="figure-img img-fluid rounded" />
              <figcaption className="figure-caption">
                Lincoln Memorial
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <AnchorLink id="label-form-control-associations" tag="h4">
            Example: Label & FormControl Associations
          </AnchorLink>
          <p>...</p>
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group mb-0">
                  <label>Favorite Color:</label>
                  <input
                    type="text"
                    placeholder="Blue..."
                    className="form-control"
                  />
                  <small className="form-text text-muted">
                    No wait! <em>Yellow...</em>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Markup
