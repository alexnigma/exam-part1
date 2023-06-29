class YourBasket {

    getDeleteButton() {
        return cy.get(`[data-icon="trash-alt"]`);
    }

    getCheckoutButton() {
        return cy.get(`#checkoutButton`);
    }

    getAddNewAdressButton() {
        return cy.contains(`Add New Address`);
    }
}

export default new YourBasket();

