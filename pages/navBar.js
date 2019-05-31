const genLibrary = require('../hookbase/genericLibrary');
const locators = require('../objectRepository/or.json');

const methods = {

    openSportsShoesFromMens: ()=>{
        genLibrary.moveToElement(locators.navBar.spanMensSection);
        genLibrary.doClick(locators.navBar.linkMensSection);
        return this;
    }

}

module.exports = {
    commands: [methods],
    url: "",
    elements: {}

};
