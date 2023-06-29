import homePage from '../support/pages/HomePage';
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import profilePage from "../support/pages/ProfilePage";
import {faker} from "@faker-js/faker";
import user from "../fixtures/user.json";

describe('Registration test suite', () => {

  beforeEach(`Open web store`, () => {
    cy.log(`Home page`);
    homePage.visit();
    homePage.welcomePopupDismiss().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();

    cy.log(`Open registration form`);
    loginPage.newCustomerButton().click();
  });

  it('Successful registration', () => {

    user.email = faker.internet.email();
    user.password = faker.internet.password({length: 20, memorable: false});
    user.securityAnswer = faker.person.lastName();

    registrationPage.emailField().type(user.email);
    registrationPage.passwordField().type(user.password);
    registrationPage.passwordRepeatField().type(user.password);
    registrationPage.securityQuestionField().click();
    registrationPage.securityQuestionTable().click();
    registrationPage.securityAnswer().type(user.securityAnswer);
    registrationPage.registerButton().should(`be.enabled`);
    registrationPage.registerButton().click();
    loginPage.successfullRegistrationPopup().should(`contain`, `Registration completed successfully. You can now log in.`);

    cy.log(`Authorization with registered user`);
    loginPage.emailField().type(user.email);
    loginPage.passwordField().type(user.password);
    loginPage.loginButton().click();
    homePage.getAccountButton().click();
    homePage.getProfileButton().should(`contain`, `${user.email}`);
    homePage.getProfileButton().click();
    profilePage.profileEmail().should(`contain.value`, `${user.email}`);

    cy.log(`Logout`);
    profilePage.backButton().click();
    homePage.getAccountButton().click();
    homePage.getLogoutButton().click();
  });

  it('Invalid registration', () => {
    cy.log(`Required fields assertions`)
    registrationPage.emailField().click();
    registrationPage.passwordField().click();
    registrationPage.passwordRepeatField().click();
    registrationPage.showPasswordAdvice().click();
    registrationPage.securityAnswer().click();
    registrationPage.securityQuestionField().click();
    registrationPage.registrationForm().click();
    cy.contains(`Please provide an email address.`).should(`be.visible`);
    cy.contains(`Please provide a password.`).should(`be.visible`);
    cy.contains(`Please repeat your password.`).should(`be.visible`);
    cy.contains(`Please select a security question.`).should(`be.visible`);
    cy.contains(`Please provide an answer to your security question.`).should(`be.visible`);
    cy.contains(`contains at least one lower character`).should(`be.visible`);
    cy.contains(`contains at least one upper character`).should(`be.visible`);
    cy.contains(`contains at least one digit`).should(`be.visible`);
    cy.contains(`contains at least one special character`).should(`be.visible`);
    cy.contains(`contains at least 8 characters`).should(`be.visible`);
    registrationPage.registerButton().should(`be.disabled`);
  });
})