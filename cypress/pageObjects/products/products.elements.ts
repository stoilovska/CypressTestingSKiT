// Teodora Stoilovska 201076

export class ProductElements{
    static get ElementsProduct(){
        return {
            getBtnBasket: () =>  cy.get('[aria-label="Show the shopping cart"]'),
            getBtnSearch: () => cy.get('.mat-search_icon-search'),
            getTxtSearch: () => cy.get('#mat-input-0'),
            getBtnAddToBasket: () => cy.get('[aria-label="Add to Basket"]'),
            getBasket: () => cy.get('[aria-label="Show the shopping cart"]'),
            getLblNotification: () => cy.get('.fa-3x.warn-notification'),
        }
    }
}