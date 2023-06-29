class DeliveryMethodPage {

    getOneDayDeliveryButton() {
        return cy.contains(`One Day Delivery`);
    }

    getFastDeliveryButton() {
        return cy.contains(`Fast Delivery`);
    }

    getStandardDeliveryButton() {
        return cy.contains(`Standard Delivery`);
    }

    getContinueButton() {
        return cy.contains(`Continue`);
    }

}

export default new DeliveryMethodPage();