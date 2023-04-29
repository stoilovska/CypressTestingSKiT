// Teodora Stoilovska 201076

describe('My first test', () => {
    
    it('Test 1 SKiT - Verify loading juice-shop site', () => {
        cy.visit("https://juice-shop.herokuapp.com/#/")
        cy.title().should('eq','OWASP Juice Shop')
    }) 

})

// describe('My first test', function() {
//     it('Does not do much!', function()  {
//         expect(true).to.equal(true)
//     })
// })