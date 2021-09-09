/// <reference types = "Cypress" />
describe('Test Suite',()=>{
    it('table test',()=>{
        //check the any value present in table
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')//check all td tag
        
        //check the value present in specific row and coloumn
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        //Check Value presence based on condition by iterating rows.
        //verify the book name 'Master In Java' whose author is Anod
        cy.get('table[name=BookTable] > tbody >tr td:nth-child(2)').each(($element,$index,$list) => {//index increase for each method and increase amount of tr
            const text = $element.text()
            if(text.includes('Amod')){
                cy.get('table[name=BookTable] > tbody >tr td:nth-child(1)').eq($index).then((bookname)=>{
                    const BookName = bookname.text()
                    expect(BookName).to.equal("Master In Java")
                })
            }
        })

    })
})