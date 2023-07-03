class CustomerFeedbackPage {

    visit() {
        return cy.visit(`/#/contact`);
    }

    getAuthorField() {
        return cy.get(`[aria-label="Field with the name of the author"]`);
    }

    getCommentField() {
        return cy.get(`#comment`);
    }

    getRatingSlider() {
        return cy.get(`#rating`);
    }

    getMaxRating() {
        return cy.get(`[aria-valuenow="5"]`);
    }

    getCaptcha() {
        return cy.get(`#captcha`);
    }

    getCaptchaResut() {
        return cy.get(`#captchaControl`);
    }

    getSubmitButton() {
        return cy.get(`#submitButton`);
    }

}

export default new CustomerFeedbackPage();