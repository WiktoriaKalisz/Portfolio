jest.mock('../../utils', () => ({
  getImageUrl: jest.fn(),
}))

import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'
import { fireEvent } from '@testing-library/react'
import { getImageUrl } from '../../utils'


beforeEach(() => {
  getImageUrl.mockImplementation((path) => path)
})

test('renders Contact heading and subtitle', () => {
  render(<Contact />)

  expect(
    screen.getByRole('heading', { name: /Contact/i })
  ).toBeInTheDocument()

  expect(
    screen.getByText(/Feel free to reach out!/i)
  ).toBeInTheDocument()
})

test('renders email contact link', () => {
  render(<Contact />)

  const emailLink = screen.getByRole('link', {
    name: /wiktoria\.kalisz\.1999@gmail\.com/i,
  })

  expect(emailLink).toBeInTheDocument()
  expect(emailLink).toHaveAttribute(
    'href',
    'mailto:wiktoria.kalisz.1999@gmail.com'
  )
})

test('renders LinkedIn and GitHub links', () => {
  render(<Contact />)

  const linkedinLink = screen.getByRole('link', {
    name: /linkedin\.com\/in\/wiktoriakalisz/i,
  })
  const githubLink = screen.getByRole('link', {
    name: /github\.com\/WiktoriaKalisz/i,
  })

  expect(linkedinLink).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/wiktoriakalisz/'
  )
  expect(githubLink).toHaveAttribute(
    'href',
    'https://github.com/WiktoriaKalisz'
  )
})

test('renders contact icons with alt text', () => {
  render(<Contact />)

  expect(screen.getByAltText(/Email icon/i)).toBeInTheDocument()
  expect(screen.getByAltText(/LinkedIn icon/i)).toBeInTheDocument()
  expect(screen.getByAltText(/GitHub icon/i)).toBeInTheDocument()
})

test('falls back to letter when image fails to load', () => {
  render(<Contact />)

  const img = screen.getByAltText(/Email icon/i)

  fireEvent.error(img)

  expect(screen.getByText('E')).toBeInTheDocument()
})


test('renders fallback when getImageUrl throws', () => {
  getImageUrl.mockImplementation(() => {
    throw new Error('boom')
  })

  render(<Contact />)

  expect(screen.getByText('E')).toBeInTheDocument()
  expect(screen.getByText('L')).toBeInTheDocument()
  expect(screen.getByText('G')).toBeInTheDocument()
})