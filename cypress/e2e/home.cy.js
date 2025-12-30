describe('Home page', () => {
  it('loads and shows main regions', () => {
    cy.visit('/')
    cy.get('nav', { timeout: 10000 }).should('exist')
    cy.contains(/Hi, I'?m Wiktoria/, { timeout: 10000 }).should('exist')
    cy.get('img[alt="Hero image of me"]', { timeout: 10000 }).should('exist')
  })

  it('has visible section headings', () => {
    cy.visit('/')

    cy.get('h1').should('have.length.at.least', 1)
    cy.get('h2').contains('Projects').should('exist')
    cy.get('h1').contains('Contact').should('exist')
  })
})
