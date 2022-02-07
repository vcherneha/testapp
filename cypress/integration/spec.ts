describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('https://testing-angular.com/end-to-end-testing/#installing-cypress')
    cy.contains('Introducing Cypress')
  })
})
describe('Authorization Tests', () => {
  it('allows the user to signup for a new account', () => {
    cy.visit('/signup')
    cy.get('#email-field').type('user@email.com')
    cy.get('#confirm-email-field').type('user@email.com')
    cy.get('#password-field').type('testPassword1234')
    cy.get('button').contains('Create new account').click()

    cy.url().should('include', '/signup/success')
  })
})