///<reference types = "Cypress" />



const dataJson = require('../../fixtures/createuser')

describe('Interceptwith cypress example',()=>{

    it('test api with somple inteception', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.intercept({
            path: '/posts'
        }).as('posts')//nick name
        cy.get("table:nth-of-type(1) a[href = '/posts']").click()
        cy.wait('@posts').then(res=>{
            cy.log(JSON.stringify(res))
            console.log(JSON.stringify(res));
            expect(res.response.body).to.have.length(100)
            
        })

    })

    it('mocking with intercept test with static response ',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.intercept('GET','/posts',{ totalpost: 5,name: 'Rijvi'}).as('posts')
        cy.get("table:nth-of-type(1) a[href = '/posts']").click()
        cy.wait('@posts')
        
    })

    it.only('mocking with intercept test with dynamic response ',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/');  
        cy.intercept('GET','/posts', { dataJson }).as('posts')
        cy.get("table:nth-of-type(1) a[href = '/posts']").click()
        cy.wait('@posts')
    })
})