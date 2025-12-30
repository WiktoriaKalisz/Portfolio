import React from 'react'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

test('renders hero heading and description', () => {
  render(<Hero />)
  const heading = screen.getByRole('heading', { name: /Hi, I'm Wiktoria/i })
  expect(heading).toBeInTheDocument()
  const description = screen.getByText(/Curious-minded developer/i)
  expect(description).toBeInTheDocument()
})
