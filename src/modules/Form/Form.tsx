import React from 'react'
import cn from 'classnames'
import { Formik, FormikActions } from 'formik'
import * as yup from 'yup'
import AnchorLink from '../../components/AnchorLink'

type FormProps<T = {}> = React.HTMLAttributes<HTMLDivElement> & {
  // Nothing here yet
} & T

type FormData = {
  name: string
  email: string
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required!')
    .min(3, 'Must be >3 characters')
    .oneOf(
      ['Danny', 'Dan', 'Daniel'],
      'Provided name is not a pre-approved value!'
    ),
  email: yup
    .string()
    .email('Email address appears to be invalid!')
    .required('Email address is a required field!'),
})

const Form: React.FC<FormProps> = () => {
  const handleSubmit = (values: FormData, actions: FormikActions<FormData>) => {
    actions.setSubmitting(false)
  }

  return (
    <div className="container">
      <AnchorLink id="forms" tag="h2">
        Forms
      </AnchorLink>
      <p className="lead">Lets investigate a basic form...</p>
      <p>
        Our million dollar startup idea is to send high-fives via email. Below
        we've implemented an intake form with client-side validations, input
        event throttling, and real-time feedback. Let's use <code>aXe</code> and{' '}
        <code>VoiceOver</code> to investigate the accessibility and usability of
        our form, because our mission is to make{' '}
        <em>high-fives an inclusive experience</em>.
      </p>
      <div className="row justify-content-center mt-4">
        <div className="col col-md-9 col-xl-6">
          <Formik
            initialValues={{ name: '', email: '' }}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
            render={props => {
              return (
                <form
                  autoComplete="off"
                  noValidate
                  spellCheck={false}
                  onSubmit={props.handleSubmit}
                >
                  <legend className="sr-only">
                    Send a virtual high-five to your favorite developer.
                  </legend>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title h5 mb-0">
                        Virtual High-Five Recipient
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={props.values.name}
                          required
                          aria-invalid={!!props.errors.name}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          className={cn('form-control', {
                            'is-invalid':
                              props.touched.name && props.errors.name,
                            'is-valid':
                              props.touched.name && !props.errors.name,
                          })}
                          placeholder="Joe Schmo..."
                        />
                        {!!props.errors.name && props.touched.name && (
                          <div className="invalid-feedback" role="alert">
                            {props.errors.name}
                          </div>
                        )}
                        <small className="form-text text-muted">
                          All great developers are named Dan, Daniel, or Danny
                        </small>
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={props.values.email}
                          required
                          aria-invalid={!!props.errors.email}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          className={cn('form-control', {
                            'is-invalid':
                              props.touched.email && props.errors.email,
                            'is-valid':
                              props.touched.email && !props.errors.email,
                          })}
                          placeholder="user@example.io..."
                        />
                        {!!props.errors.email && props.touched.email && (
                          <div className="invalid-feedback" role="alert">
                            {props.errors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="card-footer text-right">
                      <button
                        type="submit"
                        className="btn btn-success"
                        disabled={
                          !props.dirty ||
                          !props.isValid ||
                          props.isValidating ||
                          props.isSubmitting
                        }
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              )
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Form
