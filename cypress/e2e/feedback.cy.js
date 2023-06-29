import {login} from "../support/helpers/login-logout";
import customerFeedbackPage from "../support/pages/CustomerFeedbackPage";
import {faker} from "@faker-js/faker";

it('Customer Feedback test', () => {
    before(`Login`, ()=> {
        login();
        cy.wait(1000);
    })

    cy.log(`Filling feedback`);
    customerFeedbackPage.visit();
    cy.wait(1000);
    customerFeedbackPage.getCommentField().type(faker.lorem.words({min: 1, max: 4}));
    customerFeedbackPage.getRatingSlider().type("{rightarrow}{rightarrow}");

    cy.log(`Solving captcha`);
    customerFeedbackPage.getCaptcha().invoke('text').then((text) => {

        let captchaSymbol = text.split(/[1234567890]/);
        let filteredCaptchaSymbol = captchaSymbol.filter(symbol => symbol !== '');
        let captchaNumber = text.split(/[+/*-]/);
        let firstNumber = Number(captchaNumber[0]);
        let firstAction = filteredCaptchaSymbol[0];
        let secondNumber = Number(captchaNumber[1]);
        let secondAction = filteredCaptchaSymbol[1];
        let thirdNumber = Number(captchaNumber[2]);

        function captchaResult() {
            if (firstAction === "+" && secondAction === "+") {
                    return firstNumber + secondNumber + thirdNumber
            } else if (firstAction === "+" && secondAction === "-") {
                    return firstNumber + secondNumber - thirdNumber
            } else if (firstAction === "+" && secondAction === "*") {
                    return firstNumber + secondNumber * thirdNumber
            } else if (firstAction === "+" && secondAction === "/") {
                    return firstNumber + secondNumber / thirdNumber
            } else if (firstAction === "-" && secondAction === "+") {
                    return firstNumber - secondNumber + thirdNumber
            } else if (firstAction === "-" && secondAction === "-") {
                    return firstNumber - secondNumber - thirdNumber
            } else if (firstAction === "-" && secondAction === "*") {
                    return firstNumber - secondNumber * thirdNumber
            } else if (firstAction === "-" && secondAction === "/") {
                    return firstNumber - secondNumber / thirdNumber
            } else if (firstAction === "*" && secondAction === "+") {
                    return firstNumber * secondNumber + thirdNumber
            } else if (firstAction === "*" && secondAction === "-") {
                    return firstNumber * secondNumber - thirdNumber
            } else if (firstAction === "*" && secondAction === "*") {
                    return firstNumber * secondNumber * thirdNumber
            } else if (firstAction === "*" && secondAction === "/") {
                    return firstNumber * secondNumber / thirdNumber
            } else if (firstAction === "/" && secondAction === "+") {
                    return firstNumber / secondNumber + thirdNumber
            } else if (firstAction === "/" && secondAction === "-") {
                    return firstNumber / secondNumber - thirdNumber
            } else if (firstAction === "/" && secondAction === "*") {
                    return firstNumber / secondNumber * thirdNumber
            } else if (firstAction === "/" && secondAction === "/") {
                    return firstNumber / secondNumber / thirdNumber
            }
        }
        customerFeedbackPage.getCaptchaResut().type(captchaResult());
    });

    cy.log(`Feedback form assertions`);
    customerFeedbackPage.getAuthorField().should(`be.disabled`);
    customerFeedbackPage.getMaxRating().should(`be.visible`);
    customerFeedbackPage.getSubmitButton().should(`be.enabled`);

    cy.log(`Sending feedback`);
    customerFeedbackPage.getSubmitButton().click();
    cy.contains(`Thank you so much for your amazing 5-star feedback!`).should(`be.visible`);
})