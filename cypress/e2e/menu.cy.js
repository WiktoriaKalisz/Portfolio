describe('Mobile menu and overlay', () => {
  it('opens menu and displays overlay, then closes on overlay click', () => {
    // using mobile viewport so the menu button is visible
    cy.viewport(375, 812)
    cy.visit('/')

    cy.get('img[alt="menu-button"]', { timeout: 10000 }).should('be.visible').click()

    cy.get('[data-testid="overlay"]', { timeout: 10000 }).should('exist')

    cy.get('[data-testid="overlay"]').click({ force: true })
    cy.get('[data-testid="overlay"]').should('not.exist')
  })
})
