describe('Projects section', () => {
  it('renders all project cards and their links', () => {
    cy.visit('/')
    cy.get('#projects', { timeout: 10000 }).should('exist')

    cy.get('[data-testid="project-card"]', { timeout: 10000 })
      .should('have.length', 4)

    // inspecting first card for expected structure
    cy.get('[data-testid="project-card"]').first().within(() => {
      cy.get('h3').should('exist')
      cy.get('img')
        .should('have.attr', 'alt')
        .and('not.be.empty')

      cy.contains('a', 'Demo')
        .should('have.attr', 'href')
        .and('match', /^https?:\/\//)

      cy.contains('a', 'Source')
        .should('have.attr', 'href')
        .and('match', /github\.com/)
    })
  })

  it('each project card has demo and source links', () => {
    cy.visit('/')

    cy.get('[data-testid="project-card"]').each(card => {
      cy.wrap(card)
        .contains('a', 'Demo')
        .should('have.attr', 'href')

      cy.wrap(card)
        .contains('a', 'Source')
        .should('have.attr', 'href')
    })
  })

  it('scrolls to Projects section', () => {
    cy.visit('/')

    cy.get('#projects').scrollIntoView()
    cy.get('#projects').should('be.visible')
  })
})
