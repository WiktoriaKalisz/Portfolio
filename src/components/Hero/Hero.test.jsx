import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

test('renders hero heading and description', () => {
  render(<Hero />)
  const heading = screen.getByRole('heading', { name: /Hi, I'm Wiktoria/i })
  expect(heading).toBeInTheDocument()
  const description = screen.getByText(/Curious-minded developer/i)
  expect(description).toBeInTheDocument()
})

test('renders hero image with correct alt', () => {
  render(<Hero />)
  const img = screen.getByAltText(/Hero image of me/i)
  expect(img).toBeInTheDocument()
  expect(img.src).toContain('hero/heroImage.png')
})