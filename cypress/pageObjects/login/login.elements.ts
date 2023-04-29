// Teodora Stoilovska 201076

import cypress from "cypress";

export class LoginElements {
    static get ElementsLogin() {
        return {
            getBtnCloseDialog: () =>cy.get('.close-dialog'),
            getTxtEmail: () => cy.get('#email'),
            getTxtPassword: () => cy.get('#password'),
            getBtnLogin: () => cy.get('#loginButton')
        }
    }
}