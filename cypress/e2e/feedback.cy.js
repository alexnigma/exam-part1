import {login} from "../support/helpers/login-logout";
import customerFeedbackPage from "../support/pages/CustomerFeedbackPage";
import {faker} from "@faker-js/faker";

describe(`Customer Feedback test suite`, () => {

    before(`Login`, () => {
        login();
        cy.wait(1000);
    });

    it('Customer Feedback test', () => {
        cy.log(`Filling feedback`);
        customerFeedbackPage.visit();
        cy.wait(1000);
        customerFeedbackPage.getCommentField().type(faker.lorem.words({min: 1, max: 4}));
        customerFeedbackPage.getRatingSlider().type("{rightarrow}{rightarrow}");

        cy.log(`Solving captcha`);
        customerFeedbackPage.getCaptcha().invoke('text').then((text) => {
            let captchaResult = eval(text);
            customerFeedbackPage.getCaptchaResut().type(captchaResult);
        });

        cy.log(`Feedback form assertions`);
        customerFeedbackPage.getAuthorField().should(`be.disabled`);
        customerFeedbackPage.getMaxRating().should(`be.visible`);
        customerFeedbackPage.getSubmitButton().should(`be.enabled`);

        cy.log(`Sending feedback`);
        customerFeedbackPage.getSubmitButton().click();
        cy.contains(`Thank you so much for your amazing 5-star feedback!`).should(`be.visible`);
    });
})