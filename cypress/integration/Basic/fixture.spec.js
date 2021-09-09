/// <reference types = "Cypress" />

//load a fixed set of data located in file 

describe('MyTest', () => {

    //hook block

    before(function () {
        // "this" points at the test context object
        cy.fixture('user').then((user) => {
            // "this" is still the test context object
            this.user = user
        })
    })

    // the test callback is in "function () { ... }" form
    it.only('has user', function () {
        cy.visit("https://admin-demo.nopcommerce.com/login")
        // this.user exists
        expect(this.user.email).to.equal('admin@yourstore.com')
        expect(this.user.password).to.equal('admin')
        cy.get('input[name=Email]').clear().type(this.user.email)
        cy.get('input[name=Password]').clear().type(this.user.password)
        cy.get('.button-1').click()
    })
})
