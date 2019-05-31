const {
    client
} = require('nightwatch-cucumber');
const MAX_WAIT = 60000;


module.exports = {

  
    /**
     * It will return the slector strategy for the given selector string
     */
    getSelectorStrategy: function (locator) {
        if (locator.startsWith("//")) {
            return "xpath";
        } else {
            return "css selector";
        }

    },

    /**
     * @webEement : locator
     */
    setLocatorStrategy: function (webElement) {
        if (webElement.startsWith("//")) {
            client.useXpath();
        } else {
            client.useCss();
        }
    },

    /**
     * This will click on the given web element locator
     * @param {*} webElement 
     */
    doClick: function (webElement) {


        webElement = webElement.trim();
        this.setLocatorStrategy(webElement);

        client.waitForElementVisible(webElement, MAX_WAIT);
        client.click(webElement);
        return this;
    },

    /**
     * This will set text on the web element provided
     * 
     * @param {*} webElement : Web element locator
     * @param {*} text : Text to be inserted
     * @param {*} bFlag 
     */
    setText: function (webElement, text, bFlag) {
        this.setLocatorStrategy(webElement);
        client.waitForElementVisible(webElement, MAX_WAIT);
        if (bFlag === undefined) {
            client.setValue(webElement, text);
        } else {
            client.setValue(webElement, [text, client.Keys.ENTER]);
            client.pause(1000);
        }

        return this;
    },


    /**
     * This will move the pointer to element provided
     * @param {*} webElement 
     */
    moveToElement: function (webElement) {
        var xCor, yCor;
        webElement = webElement.trim();
        this.setLocatorStrategy(webElement);
        client.waitForElementVisible(webElement, MAX_WAIT);
        client.getLocation(webElement, function (result) {
            xCor = result.value.x;
            yCor = result.value.y;
            client.moveToElement(webElement, xCor, yCor);
            client.pause(1000);
        })
    },

    /**
     * This will wait till the given element is present in the DOM
     */
    waitForElementPresent: function (webElement) {

        this.setLocatorStrategy(webElement);
        client.waitForElementPresent(webElement, MAX_WAIT);
        return this;
    },

    /**
     * This will wait till the given element is not present in the DOM
     */
    waitForElementNotPresent: function (webElement) {

        this.setLocatorStrategy(webElement);
        client.waitForElementNotPresent(webElement, MAX_WAIT);
        return this;
    },

    /**
     * This will wait till the given element is visible
     */
    waitForElementVisible: function (webElement) {
        this.setLocatorStrategy(webElement);
        client.waitForElementVisible(webElement, MAX_WAIT);
        return this;
    },




}
