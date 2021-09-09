/// <reference types = "Cypress" />

describe('MyTestSuite', ()=>{
    it('verify title of the page positive case', ()=>{
        cy.visit('https://weatherapp-rijvi.herokuapp.com/')// open url
        cy.get('a > button').click()//click onk button
        cy.get('#cityName').type("Rajshahi")//search box add value
        cy.get('#submitBtn').click()// click  on  search button
        cy.get('#temp').contains('30.83oC')

        cy.get('#cityName').clear().type("Dhaka")//search box add value
        cy.get('#submitBtn').click()// click  on  search button
        cy.get('#temp').contains('31.99oC')
    })

   
})


// body > div.main_header > div > div > div > div.col-md-6.col-12.main_header_left > a > button
// div.main_header:nth-child(2) div.row div.col-md-10.col-12.mx-auto div.row div.col-md-6.col-12.main_header_left:nth-child(1) a:nth-child(3) > button:nth-child(1)