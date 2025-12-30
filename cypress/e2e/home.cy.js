describe('Home page', () => {
  it('loads and shows main regions', () => {
    cy.visit('/')
    cy.get('nav', { timeout: 10000 }).should('exist')
    cy.contains(/Hi, I'?m Wiktoria/, { timeout: 10000 }).should('exist')
    cy.get('img[alt="Hero image of me"]', { timeout: 10000 }).should('exist')
  })
})
