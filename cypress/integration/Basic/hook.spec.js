/// <reference types = "Cypress" />

describe('MyTestSuite',()=>{

    before(() => {
        // runs once before all tests in the block
        cy.log('This is Setup block')
      })
    
      beforeEach(() => {
        // runs before each test (it block) in the block
        cy.log('This is Login block')
      })
    
      afterEach(() => {
        // runs after each test (it block) in the block
        cy.log('This is Logout block')
      })
    
      after(() => {
        // runs once after all tests in the block
        cy.log('This is Finish block')
      })

    it('Searching',()=>{
        cy.log("This is for searching")
    })

    it('Advance Searching',()=>{
        cy.log("This is for advance searching")
    })

    it('Listing product test',()=>{
        cy.log("this is listing products")
    })

})