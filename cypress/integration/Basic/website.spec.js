/// <reference types = "Cypress" />

describe('MyTestSuite', ()=>{
    it('verify title of the page positive case', ()=>{
        cy.visit('https://weatherapp-rijvi.herokuapp.com/')
        cy.title().should('eq','weatherApp')
    })

    it('verify title of the page negative case ', ()=>{
        cy.visit('https://weatherapp-rijvi.herokuapp.com/')
        cy.title().should('eq','WeatherApp')
    })
})