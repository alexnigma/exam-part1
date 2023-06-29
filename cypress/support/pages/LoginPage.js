class LoginPage {

    visit() {
        return cy.visit(`/#/login`);
    }

    closeWelcomePopup() {
        return cy.get(`[aria-label="Close Welcome Banner"]`);
    }

    emailField() {
        return cy.get(`#email`);
    }

    passwordField() {
        return cy.get(`#password`);
    }

    loginButton() {
        return cy.get(`#loginButton`);
    }

    newCustomerButton() {
        return cy.get(`#newCustomerLink`);
    }

    successfullRegistrationPopup() {
        return cy.get(`.mat-simple-snack-bar-content`)
    }

}

export default new LoginPage();