// Teodora Stoilovska 201076

import { LoginMethods } from "../pageObjects/login/login.methods";
import { ProductMethods } from "../pageObjects/products/products.methods";

describe('template spec', () => {
  var login = new LoginMethods();
  var products = new ProductMethods();

  beforeEach(function () {
    login.navigateToLoginAndCloseDialog('https://juice-shop.herokuapp.com/login#/login');
    login.login('your email', 'your password');
    login.verifySuccessfullLogin();
  })

  // it('User shouldn\t be able to add sold item', () => {
    // cy.get('.mat-search_icon-search').click();
    // cy.get('#mat-input-0').type('OWASP Snakes and Ladders - Mobile Apps');
    // cy.get('#mat-input-0').type('{enter}');
    // cy.get('[aria-label="Add to Basket"]').click();
    // cy.get('.fa-3x.warn-notification').should('have.text', '1');
  // })

  it('User shouldn\'t be able to add sold item with POM', () => {
    products.addItemToBasket('OWASP Juice Shop Holographic Sticker');
    // products.verifyItemAddedToBasket('1');
  })
})