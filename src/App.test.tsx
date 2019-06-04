import React from 'react'
import App from './App'
import { render, cleanup } from '@testing-library/react'

describe('App', () => {
  afterEach(cleanup)
  it('renders a banner landmark', () => {
    const thing = render(<App />)
    expect(thing.queryByRole('banner')).toBeTruthy()
  })
  it('renders a main landmark', () => {
    const thing = render(<App />)
    expect(thing.queryByRole('main')).toBeDefined()
  })
})
