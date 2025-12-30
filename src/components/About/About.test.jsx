import { render, screen } from '@testing-library/react'
import { About } from './About'
import interests from '../../data/interests.json'

test('renders Interests section heading', () => {
  render(<About />)

  const heading = screen.getByRole('heading', { name: /Interests/i })
  expect(heading).toBeInTheDocument()
})

test('renders all interests titles and descriptions', () => {
  render(<About />)

  interests.forEach(item => {
    expect(screen.getByText(item.title)).toBeInTheDocument()
    expect(screen.getByText(item.description)).toBeInTheDocument()
  })
})

test('each interest has an image with alt text', () => {
  render(<About />)

  interests.forEach(item => {
    const img = screen.getByAltText(item.alt)
    expect(img).toBeInTheDocument()
  })
})
