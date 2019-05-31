const {
  client
} = require('nightwatch-cucumber');
const {
  defineSupportCode
} = require('cucumber');


var data = require('../testData/globalData.json');

data = Object.assign(data, global.config);

const homePage = client.page.homePage();
const navBar = client.page.navBar();
const productListingPage = client.page.productListingPage();
const productDetailPage = client.page.productDetailPage();



defineSupportCode(({
  Given,
  Then,
  When
}) => {
  Given(/^Launch Flipkart Site$/, () => {

    homePage.navigate();
    homePage.waitForPageLoad();
    return homePage; 

  });



When(/^User Performes Login$/,()=>{
  homePage.performLogin(data.userCredentials.userName,data.userCredentials.password);
  return homePage; 
})

When(/^User Opens Sports Shoes From Mens Section Of Navigation Bar$/,()=>{
  navBar.openSportsShoesFromMens();
  return navBar;
})

When(/^User Opens Page "([^"]*)" From Product Listing Page$/,(index)=>{
  productListingPage.openPageNumber(index);
  return productListingPage;
})

When(/^User Opens Product "([^"]*)"$/,(product)=>{
  productListingPage.openProduct(product);
  return productListingPage;
})

When(/^User Adds Product To Cart$/,()=>{
  productDetailPage.addToCart();
  return productDetailPage;
})


});