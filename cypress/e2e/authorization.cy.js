import homePage from '../support/pages/HomePage';
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import profilePage from "../support/pages/ProfilePage";
import user from "../fixtures/user.json";
import {logoutFromProfilePage} from "../support/helpers/login-logout";

describe(`Authorization test suite`, () => {

    beforeEach(`Open web store`, () => {
        cy.log(`Home page`);
        homePage.visit();
        homePage.welcomePopupDismiss().click();
        homePage.getAccountButton().click();
        homePage.getLoginButton().click();
    });

    afterEach(`Logout`, () => {
        logoutFromProfilePage()
    });

    it('Authorization from home page', () => {
        cy.log(`Authorization on login page`);
        loginPage.emailField().type(user.email);
        loginPage.passwordField().type(user.password);
        loginPage.loginButton().click();

        cy.log(`Login assertions`);
        homePage.getAccountButton().click();
        homePage.getProfileButton().should(`contain`, `${user.email}`);
        homePage.getProfileButton().click();
        profilePage.profileEmail().should(`contain.value`, `${user.email}`);
    });

    it('Authorization from registration page',  () => {
        cy.log(`Clicking newCustomerButton on Login page`);
        loginPage.newCustomerButton().click();

        cy.log(`Clicking alreadyCustomerButton on Registration page`);
        registrationPage.alreadyCustomerButton().click();

        cy.log(`Authorization on login page`);
        loginPage.emailField().type(user.email);
        loginPage.passwordField().type(user.password);
        loginPage.loginButton().click();

        cy.log(`Login assertions`);
        homePage.getAccountButton().click();
        homePage.getProfileButton().should(`contain`, `${user.email}`);
        homePage.getProfileButton().click();
        profilePage.profileEmail().should(`contain.value`, `${user.email}`);
    });
})