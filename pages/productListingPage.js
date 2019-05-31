const genLibrary = require('../hookbase/genericLibrary');
const locators = require('../objectRepository/or.json');
const {
    client
} = require('nightwatch-cucumber');
const chai = require('chai');

const methods = {

    openPageNumber: (index)=>{
        genLibrary.doClick(locators.productListingPage.linkPageNumer.replace('::index::',index));
        genLibrary.waitForElementPresent(locators.navBar.spanMensSection);
        return this;
    },

    openProduct: (product)=>{
        genLibrary.moveToElement(locators.productListingPage.linkProductName.replace('::productName::',product));
        genLibrary.doClick(locators.productListingPage.linkProductName.replace('::productName::',product));
        genLibrary.waitForElementPresent(locators.navBar.spanMensSection);
        client.window_handles((result)=>{
            var handle = result.value[1];
            client.switchWindow(handle);
            genLibrary.waitForElementPresent(locators.navBar.spanMensSection);
        })
        return this;
    }

}

module.exports = {
    commands: [methods],
    url: "",
    elements: {}

};
