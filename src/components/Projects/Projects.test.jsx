import React from 'react'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

test('renders Projects heading and at least one project title', () => {
  render(<Projects />)
  const heading = screen.getByRole('heading', { name: /Projects/i })
  expect(heading).toBeInTheDocument()
  // one of project titles from data should be rendered
  const projectTitles = screen.getAllByText(/CookBook|MyShop|CityWeather|Portfolio/)
  expect(projectTitles.length).toBeGreaterThan(0)
})
