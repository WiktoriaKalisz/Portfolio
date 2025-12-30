import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { fireEvent } from '@testing-library/react'

test('renders navbar brand and menu items', () => {
  render(<Navbar />)
  const brand = screen.getByText(/Portfolio/i)
  expect(brand).toBeInTheDocument()
  const experienceLink = screen.getByText(/Experience/i)
  expect(experienceLink).toBeInTheDocument()
})

test('clicking a menu item closes the menu', () => {
  render(<Navbar />)
  const menuBtn = screen.getByAltText(/menu-button/i)
  fireEvent.click(menuBtn)

  const experienceLink = screen.getByText(/Experience/i)
  fireEvent.click(experienceLink)

  const menuItems = screen.getByRole('list')
  expect(menuItems.className).not.toContain('menuOpen')
})

test('toggles menu when menu button is clicked', () => {
  render(<Navbar />)
  const menuBtn = screen.getByAltText(/menu-button/i)
  
  const menuItems = screen.getByRole('list')
  expect(menuItems.className).not.toContain('menuOpen')

  fireEvent.click(menuBtn)
  expect(menuItems.className).toContain('menuOpen')

  fireEvent.click(menuBtn)
  expect(menuItems.className).not.toContain('menuOpen')
})

test('closes menu when overlay is clicked', () => {
  render(<Navbar />)
  const menuBtn = screen.getByAltText(/menu-button/i)
  
  fireEvent.click(menuBtn)
  const overlay = screen.getByTestId('overlay')
  fireEvent.click(overlay)
  
  const menuItems = screen.getByRole('list')
  expect(menuItems.className).not.toContain('menuOpen')
})

test('menu button image changes on toggle', () => {
  render(<Navbar />)
  const menuBtn = screen.getByAltText(/menu-button/i)
  
  expect(menuBtn.src).toContain('nav/menuIcon.png')
  fireEvent.click(menuBtn)
  expect(menuBtn.src).toContain('nav/closeIcon.png')
})
