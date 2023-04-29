// Teodora Stoilovska 201076

import { ProductElements } from "./products.elements";

export class ProductMethods{
    addItemToBasket(item: string){
        ProductElements.ElementsProduct.getBtnSearch().click();
        ProductElements.ElementsProduct.getTxtSearch().type(item);
        ProductElements.ElementsProduct.getTxtSearch().type('{enter}');
        ProductElements.ElementsProduct.getBtnAddToBasket().click();
        ProductElements.ElementsProduct.getBasket().click();
    }
    verifyItemAddedToBasket(numAdded: string){
        ProductElements.ElementsProduct.getLblNotification().should('have.text', numAdded)
    }
}