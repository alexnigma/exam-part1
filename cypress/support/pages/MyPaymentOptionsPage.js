class MyPaymentOptionsPage {

    getAddNewCard() {
        return cy.contains(` Add new card `);
    }

    cardNameField() {
        return cy.get(`#mat-input-10`);
    }

    cardNumberField() {
        return cy.get(`#mat-input-11`);
    }

    expiryMonthField() {
        return cy.get(`#mat-input-12`);
    }

    expiryYearField() {
        return cy.get(`#mat-input-13`);
    }

    getSubmitButton() {
        return cy.get(`#submitButton`);
    }

    getCardByName() {
        return cy.get(`.cdk-column-Name`);
    }

    getLastAddedCard() {
        return cy.get(`.mat-radio-inner-circle`).last();
    }

    getContinueButton() {
        return cy.contains(`Continue`);
    }

}

export default new MyPaymentOptionsPage();