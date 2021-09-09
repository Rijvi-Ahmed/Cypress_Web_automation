/// <reference types = "Cypress" />
describe('Suitr Name',()=>{

    it("Alerts",()=>{
        cy.visit('https://www.jquery-az.com/javascript/demo.php?ex=151.0_1')
        cy.get('button').click()
        
        //mocha framework

        //events capture the alerts msg to str variable 
        cy.on('window:alert',(str)=>{
            //compare to actual msg
            expect(str).to.equal('This is a simple JavaScript alert!')//validation
        })
    })

    it("Conformation Alerts",()=>{
        cy.visit('https://www.jquery-az.com/javascript/demo.php?ex=151.1_1')
        cy.get('button').click()
 
        //mocha framework

        //events capture the alerts msg to str variable 
        cy.on('window:confirm',(str)=>{//event name (window:confirm)
            //compare to actual msg
            expect(str).to.equal('Are you sure you want to close this account permanently?')//validation
            
        })
        cy.on('uncaught:exception',(str)=>{
            expect(str).to.equal('Your Account deleted!')
        })
    })
})