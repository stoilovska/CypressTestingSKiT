// Teodora Stoilovska 201076

describe('My first test', () => {
    it('Test 3 SKiT - User shouldn\'t be able to add sold item', () => {

        cy.visit("https://juice-shop.herokuapp.com/login#/login");

        cy.get('[aria-label="Close Welcome Banner"]').click();

        cy.get('#email').type('your email');
        cy.get('#password').type('your password');
        cy.get('#loginButton').click();

        cy.get('#searchQuery').type('OWASP Juice Shop Holographic Sticker');
        cy.get('#mat-input-0').type('{enter}');

        cy.get('[aria-label="Add to Basket"]').click();

        cy.get('[aria-label="Show the shopping cart"]').click();
    }) 

})