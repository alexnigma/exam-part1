import {faker} from "@faker-js/faker";
import myPaymentOptionsPage from "../pages/MyPaymentOptionsPage";
export function addPaymentMethod() {

    let paymentCard = {
        cardName: faker.person.firstName(),
        cardNumber: faker.number.int({min: 1111111111111111, max: 9999999999999999}),
    };

    myPaymentOptionsPage.getAddNewCard().click();
    myPaymentOptionsPage.cardNameField().type(paymentCard.cardName);
    myPaymentOptionsPage.cardNumberField().type(paymentCard.cardNumber);
    myPaymentOptionsPage.expiryMonthField().select(`1`);
    myPaymentOptionsPage.expiryYearField().select(`2099`);
    myPaymentOptionsPage.getSubmitButton().click();
    cy.wait(3000);
    myPaymentOptionsPage.getLastAddedCard().click();
    myPaymentOptionsPage.getContinueButton().click();
}