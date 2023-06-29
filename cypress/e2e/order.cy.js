import homePage from '../support/pages/HomePage';
import yourBasket from "../support/pages/YourBasketPage";
import {faker} from "@faker-js/faker";
import {login} from "../support/helpers/login-logout";
import addNewAddress from "../support/pages/AddNewAddressPage";
import deliveryMethodPage from "../support/pages/DeliveryMethodPage";
import myPaymentOptionsPage from "../support/pages/MyPaymentOptionsPage";
import orderSummaryPage from "../support/pages/OrderSummaryPage";
import yourBasketPage from "../support/pages/YourBasketPage";
import {findProduct} from "../support/helpers/findProduct";

describe(`Order test suite`, () => {

    beforeEach(`Open web store and login`, () => {
        cy.log(`Home page`);
        homePage.visit();
        homePage.cookiePopupDismiss().click();

        cy.log(`Login`);
        login()
    });

    it(`Place and delete order`, () => {
        cy.log(`Basket is empty`);
        homePage.getBasketCounter().should(`contain`, 0);

        cy.log(`Search for apple`);
        homePage.getSearchButton().type(`Apple{enter}`);

        cy.log(`Add apple to basket`);
        homePage.getAddToBasketButton().click();
        homePage.getBasketCounter().should(`contain`, 1);
        homePage.getBasketButton().click();

        cy.log(`Delete apple`)
        yourBasketPage.getDeleteButton().click();
        homePage.getBasketCounter().should(`contain`, 0);
    });

    it('Making order with search', () => {
        cy.log(`Basket is empty`);
        homePage.getBasketCounter().should(`contain`, 0);

        cy.log(`Search for banana`);
        homePage.getSearchButton().type(`Banana{enter}`);

        cy.log(`Add banana to basket`);
        homePage.getAddToBasketButton().click();
        homePage.getBasketCounter().should(`contain`, 1);
        homePage.getBasketButton().click();
        yourBasket.getCheckoutButton().click();

        cy.log(`Adding new address`);

        let address = {
            country: faker.address.country(),
            name: faker.person.fullName(),
            mobileNumber: faker.number.int({min: 1000000, max: 9999999999}),
            zipCode: faker.number.int({min: 10000, max: 99999}),
            addressField: faker.address.secondaryAddress(),
            city: faker.address.city(),
            state: faker.address.state()
        };

        yourBasket.getAddNewAdressButton().click();
        addNewAddress.countryField().type(address.country);
        addNewAddress.nameField().type(address.name);
        addNewAddress.mobileNumberField().type(address.mobileNumber);
        addNewAddress.zipCodeField().type(address.zipCode);
        addNewAddress.addressField().type(address.addressField);
        addNewAddress.cityField().type(address.city);
        addNewAddress.stateField().type(address.state);
        addNewAddress.getSubmitButton().click();
        addNewAddress.selectNewAddressButton().contains(`${address.name}`).click();
        addNewAddress.getContinueButton().click();


        cy.log(`Choosing delivery method`);
        deliveryMethodPage.getOneDayDeliveryButton().click();
        deliveryMethodPage.getContinueButton().click();

        cy.log(`Adding new payment method`);

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

        cy.log(`Order Summary page`);
        cy.log(`Order assertions`);
        cy.contains(`${address.name}`).should(`be.visible`);
        cy.contains(`${address.country}`).should(`be.visible`);
        cy.contains(`${address.mobileNumber}`).should(`be.visible`);
        cy.contains(`${address.zipCode}`).should(`be.visible`);
        cy.contains(`${address.addressField}`).should(`be.visible`);
        cy.contains(`${address.city}`).should(`be.visible`);
        cy.contains(`${address.state}`).should(`be.visible`);
        cy.contains(`${paymentCard.cardName}`).should(`be.visible`);
        cy.contains(`Banana`).should(`be.visible`);

        cy.log(`Order confirmation`);
        orderSummaryPage.getPlaceOrderButton().click();
        cy.get(`.confirmation`).should(`contain`, `Thank you for your purchase!`);
    });

    it.only('111 ', () => {
        findProduct(`Banana`)

    });
})