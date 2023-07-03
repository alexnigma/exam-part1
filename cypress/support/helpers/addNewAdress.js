import {faker} from "@faker-js/faker";
import yourBasket from "../pages/YourBasketPage";
import addNewAddress from "../pages/AddNewAddressPage";
export function addNewAdress() {

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
}