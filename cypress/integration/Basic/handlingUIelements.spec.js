/// <reference types = "Cypress" />


describe('MyTestSuite', ()=>{

    it.only('Verify checkbox and radio button', ()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')// open url
        cy.url().should('include','automationtesting')//verify url

       cy.get(':nth-child(1) > :nth-child(2) > .form-control').should('be.enabled').type('Rijvi')
       cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('be.visible').should('be.enabled').type('Ahmed')
       cy.get('.col-md-8 > .form-control').should('be.enabled').type('Chapai Nawabganj')
        cy.get('input[type=email]').should('be.visible').should('be.enabled').type('rijvi625@gmail.com')
        cy.get('input[type=tel]').should('be.visible').should('be.enabled').type('01521482738')
    
        //radio button
       // cy.wait(5000)
        cy.get('input[value=Male]').should('be.visible').click()//visible checked
        cy.get('input[value=FeMale]').should('be.visible').should('not.be.checked')//visible  not checked
        cy.get('input[value=FeMale]').should('be.visible').click()//visible checked

    })

    it('hobbies check boxes', ()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')// open url
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //check through all same locator using array
        cy.get('input[type=checkbox]').check(['Cricket','Movies'])
    })

    it('Skill droup down', ()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')// open url
        cy.get('#Skills').select('Android').should('have.value','Android')//select value from drop down
    })

    it('Language multi select', ()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')// open url
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()

    })

    it('Select countries searchable drop down', ()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')// open url
        cy.get('[role=combobox]').click({force: true})
        cy.get('.select2-search__field').type('Bangladesh')
        cy.get('.select2-search__field').type('{enter}')

    })

   
})


// body > div.main_header > div > div > div > div.col-md-6.col-12.main_header_left > a > button
// div.main_header:nth-child(2) div.row div.col-md-10.col-12.mx-auto div.row div.col-md-6.col-12.main_header_left:nth-child(1) a:nth-child(3) > button:nth-child(1)
// body.ng-scope:nth-child(2) div.container.center div.row:nth-child(2) div.col-sm-6.col-md-6.col-xs-12 form.form-horizontal.ng-invalid.ng-invalid-required.ng-valid-email.ng-valid-pattern.ng-valid-minlength.ng-dirty.ng-valid-parse div.form-group:nth-child(5) div.col-md-4.col-xs-4.col-sm-4 label:nth-child(2) > input.ng-valid.ng-dirty.ng-valid-parse.ng-touched