const genLibrary = require('../hookbase/genericLibrary');
const locators = require('../objectRepository/or.json');

const methods = {
    waitForPageLoad: () =>{
        genLibrary.waitForElementVisible(locators.homePage.inputUserName);
        return this;
    },


    performLogin:(userName, password)=>{
        genLibrary.setText(locators.homePage.inputUserName, userName);
        genLibrary.setText(locators.homePage.inputPassword, password);
        genLibrary.doClick(locators.homePage.btnLogin);
        genLibrary.waitForElementNotPresent(locators.homePage.inputUserName);
        genLibrary.waitForElementPresent(locators.navBar.spanMensSection);
        return this;


    }

}

module.exports = {
    commands: [methods],
    url: "https://www.flipkart.com",
    elements: {}

};
