import React from 'react'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

test('renders navbar brand and menu items', () => {
  render(<Navbar />)
  const brand = screen.getByText(/Portfolio/i)
  expect(brand).toBeInTheDocument()
  // menu items are present in DOM (may be hidden via CSS but still in tree)
  const experienceLink = screen.getByText(/Experience/i)
  expect(experienceLink).toBeInTheDocument()
})
