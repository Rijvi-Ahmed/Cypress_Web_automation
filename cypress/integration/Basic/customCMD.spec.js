/// <reference types = "Cypress" />
describe('CustomCMD', () => {


    it('login test', () => {
        cy.login('admin@yourstore.com', 'admin')//valid data
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
        
        //data driven test
        //negative test case
        cy.login('admin@yourstore.com', 'admiddn')//valid data
        cy.title().should('be.equal', 'Your store. Login')

        cy.login('adffmin@yourstore.com', 'admin')//valid data
        cy.title().should('be.equal', 'Your store. Login')
    })


    it('add customer', () => {
        //login script
        cy.login('admin@yourstore.com', 'admin')

        //adding customer script
        cy.log('Adding customer..................')

    })
    it('edit customer', () => {

        //login script
        cy.login('admin@yourstore.com', 'admin')

        //edit customer script
        cy.log('Adding customer..................')
    })
})