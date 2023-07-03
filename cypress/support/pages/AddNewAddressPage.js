class AddNewAddress {

    countryField() {
        return cy.get(`#mat-input-3`);
    }

    nameField() {
        return cy.get(`#mat-input-4`);
    }

    mobileNumberField() {
        return cy.get(`#mat-input-5`);
    }

    zipCodeField() {
        return cy.get(`#mat-input-6`);
    }

    addressField() {
        return cy.get(`#address`);
    }

    cityField() {
        return cy.get(`#mat-input-8`);
    }

    stateField() {
        return cy.get(`#mat-input-9`);
    }

    getSubmitButton() {
        return cy.get(`#submitButton`);
    }

    selectNewAddressButton() {
        return cy.get(`.mat-row > .cdk-column-Name`);
    }

    getContinueButton() {
        return cy.contains(`Continue`);
    }

}

export default new AddNewAddress();