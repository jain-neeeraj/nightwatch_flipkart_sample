const genLibrary = require('../hookbase/genericLibrary');
const locators = require('../objectRepository/or.json');
const {
    client
} = require('nightwatch-cucumber');

const methods = {

    addToCart: ()=>{
        client.pause(2000);
        genLibrary.doClick(locators.productDetails.btnAddToCart);
        genLibrary.waitForElementNotPresent(locators.navBar.spanMensSection);
        genLibrary.waitForElementPresent(locators.userCartPage.btnPlaceOrder);
        return this;
    },
}

module.exports = {
    commands: [methods],
    url: "",
    elements: {}

};
