class ProfilePage {

    profileEmail() {
        return cy.get(`#email`);
    }

    backButton() {
        return cy.contains(`Back`);
    }
}

export default new ProfilePage();