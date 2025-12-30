describe('Contact section', () => {
  it('shows contact links and addresses', () => {
    cy.visit('/')
    cy.get('#contact', { timeout: 10000 }).should('exist')

    cy.get('#contact').within(() => {
      cy.get('a[href^="mailto:"]').should('have.attr', 'href', 'mailto:wiktoria.kalisz.1999@gmail.com')

      cy.contains('linkedin.com/in/wiktoriakalisz')
        .should('have.attr', 'href', 'https://www.linkedin.com/in/wiktoriakalisz/')

      cy.contains('github.com/WiktoriaKalisz')
        .should('have.attr', 'href', 'https://github.com/WiktoriaKalisz')
    })
  })
})
