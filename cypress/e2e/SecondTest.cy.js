// Teodora Stoilovska 201076

describe('My first test', () => {
    it('Test 2 SKiT - Verify addition and deletion product in juice-shop site', () => {

        cy.visit("https://juice-shop.herokuapp.com/login#/login");
        cy.get('[aria-label="Close Welcome Banner"]').click();
        cy.get('#email').type('your email');
        cy.get('#password').type('your password');
        cy.get('#loginButton').click();

        cy.get('#searchQuery').type('Strawberry Juice');
        cy.get('#mat-input-0').type('{enter}');

        cy.get('[aria-label="Add to Basket"]').click();
        // cy.get('[aria-label="Add to Basket"]').click();
        cy.get('.fa-3x.warn-notification').should('have.text', '1');
        cy.get('[aria-label="Show the shopping cart"]').click();
        cy.get('mat-row').last().get('mat-cell > button').last().click();

    }) 

})
