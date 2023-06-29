class OrderSummaryPage {

    getPlaceOrderButton() {
        return cy.contains(`Place your order and pay`);
    }

}

export default new OrderSummaryPage();