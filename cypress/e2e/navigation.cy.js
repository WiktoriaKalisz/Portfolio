describe('Navigation anchors', () => {
  beforeEach(() => cy.visit('/'))

  it('can navigate to About section via anchor', () => {
    cy.get('a[href="#about"]').click({ force: true })
    cy.url().should('include', '#about')
    cy.get('#about').should('exist')
  })

  it('can navigate to Projects section via anchor', () => {
    cy.get('a[href="#projects"]').click({ force: true })
    cy.url().should('include', '#projects')
    cy.get('#projects').should('exist')
  })
})
