/// <reference types = "Cypress" />
describe('TestSuit',()=>{

    it('Navigation test',()=>{
        cy.visit('https://weatherapp-rijvi.herokuapp.com/')
        cy.title().should('eq','weatherApp')

        cy.get('.nav-link').contains('Weather').click()
        cy.title().should('eq','weatherApp')
        //back to home page
        cy.go('back')
        cy.title().should('eq','weatherApp')
        //forward to weather page
        cy.go('forward')
        cy.title().should('eq','weatherApp')

        cy.go(-1)//back
        cy.title().should('eq','weatherApp')

        cy.go(1)//forward
        cy.title().should('eq','weatherApp')

        //reload the page 
        cy.reload()


    })
})