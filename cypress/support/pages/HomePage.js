class HomePage {
    visit() {
        cy.visit(`/`);
    }

    welcomePopupDismiss() {
        return cy.get(`.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted`)
    }

    cookiePopupDismiss() {
        return cy.get(`.cc-btn.cc-dismiss`);
    }

    getAccountButton() {
        return cy.get(`#navbarAccount`);
    }

    getLoginButton() {
        return cy.get(`#navbarLoginButton`);
    }

    getProfileButton() {
        return cy.get(`.mat-menu-content > [aria-label="Go to user profile"]`);
    }

    getLogoutButton() {
        return cy.get(`#navbarLogoutButton`);
    }

    getSearchButton() {
        return cy.get(`#searchQuery`);
    }

    getBasketButton() {
        return cy.contains(` Your Basket`);
    }

    getBasketCounter() {
        return cy.get(`.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification`);
    }

    getAddToBasketButton() {
        return cy.contains(`Add to Basket`).first();
    }
}

export default new HomePage();