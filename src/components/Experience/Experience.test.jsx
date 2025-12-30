import React from 'react'
import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'
import skills from "../../data/skills.json"
import history from "../../data/history.json"

test('renders Experience heading and a skill', () => {
  render(<Experience />)
  const heading = screen.getByRole('heading', { name: /Experience/i })
  expect(heading).toBeInTheDocument()
  const skills = screen.getAllByText(/HTML|CSS|React/i)
  expect(skills.length).toBeGreaterThan(0)
})

test("renders all skills from skills.json", () => {
  render(<Experience />)

  skills.forEach(skill => {
    expect(screen.getByText(skill.title)).toBeInTheDocument()
  })
})

test("each skill has an image with alt text", () => {
  render(<Experience />)

  skills.forEach(skill => {
    const img = screen.getByAltText(skill.title)
    expect(img).toBeInTheDocument()
  })
})

 test('renders all history items with role and organisation', () => {
    render(<Experience />)

    history.forEach(item => {
      const heading = screen.getByText(`${item.role}, ${item.organisation}`)
      expect(heading).toBeInTheDocument()

      const dates = screen.getByText(`${item.startDate} - ${item.endDate}`)
      expect(dates).toBeInTheDocument()
    })
  })

  test('renders all experiences inside history items', () => {
    render(<Experience />)

    history.forEach(item => {
      item.experiences.forEach(exp => {
        expect(screen.getByText(exp)).toBeInTheDocument()
      })
    })
  })

  test('renders correctly when skills and history are empty arrays', () => {
  render(<Experience skills={[]} history={[]} />)

  const heading = screen.getByRole('heading', { name: /Experience/i })
  expect(heading).toBeInTheDocument()

  const skillsContainer = screen.getByTestId('skills')
expect(skillsContainer).toBeEmptyDOMElement()

  const historyContainer = screen.getByTestId('history')
expect(historyContainer).toBeEmptyDOMElement()
})
