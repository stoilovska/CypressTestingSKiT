// Teodora Stoilovska 201076

import { LoginMethods } from "../pageObjects/login/login.methods";
import { ProductMethods } from "../pageObjects/products/products.methods";

describe('template spec', () => {
  var login = new LoginMethods();
  var products = new ProductMethods();
  const testData = require('../fixtures/login.json')

  testData.loginData.forEach((testcase:{email: string; password: string; } ) => {
    it('User should be able to login', () => {
      login.navigateToLoginAndCloseDialog('https://juice-shop.herokuapp.com/login#/login');
      login.login(testcase.email, testcase.password);
      login.verifySuccessfullLogin();
    })
  });
})