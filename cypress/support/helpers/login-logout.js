import homePage from "../pages/HomePage";
import loginPage from "../pages/LoginPage";
import profilePage from "../pages/ProfilePage";
import user from "../../fixtures/user.json";

export function login() {
    loginPage.visit();
    cy.wait(1000);
    loginPage.closeWelcomePopup().click();
    loginPage.emailField().type(user.email);
    loginPage.passwordField().type(user.password);
    loginPage.loginButton().click();
}

export function logoutFromProfilePage() {
    profilePage.backButton().click();
    homePage.getAccountButton().click();
    homePage.getLogoutButton().click();
}