class RegistrationPage {

    registrationForm() {
        return cy.get(`.cdk-overlay-backdrop`);
    }

    emailField() {
        return cy.get(`#emailControl`);
    }

    passwordField() {
        return cy.get(`#passwordControl`);
    }

    passwordRepeatField() {
        return cy.get(`#repeatPasswordControl`);
    }

    showPasswordAdvice() {
        return cy.get(`#mat-slide-toggle-1`);
    }

    securityQuestionField() {
        return cy.get(`[name="securityQuestion"]`);
    }

    securityQuestionTable() {
        return cy.get(`#mat-option-4 > .mat-option-text`);
    }

    securityAnswer() {
        return cy.get(`#securityAnswerControl`);
    }

    registerButton() {
        return cy.get(`#registerButton`);
    }

    alreadyCustomerButton() {
        return cy.get(`#alreadyACustomerLink`);
    }

}

export default new RegistrationPage();