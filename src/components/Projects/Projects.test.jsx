import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'
import projects from "../../data/projects.json"

test('renders Projects heading and at least one project title', () => {
  render(<Projects />)
  const heading = screen.getByRole('heading', { name: /Projects/i })
  expect(heading).toBeInTheDocument()
  const projectTitles = screen.getAllByText(/CookBook|MyShop|CityWeather|Portfolio/)
  expect(projectTitles.length).toBeGreaterThan(0)
})

test('renders all projects from projects.json', () => {
  render(<Projects />)
  projects.forEach(project => {
    expect(screen.getByText(project.title)).toBeInTheDocument()
  })
})

test('renders ProjectCard for each project', () => {
  render(<Projects />)
  const cards = screen.getAllByTestId('project-card')
  expect(cards.length).toBe(projects.length)
})

test('each project has an image with correct alt text', () => {
  render(<Projects />)
  projects.forEach(project => {
    const img = screen.getByAltText(project.title)
    expect(img).toBeInTheDocument()
  })
})