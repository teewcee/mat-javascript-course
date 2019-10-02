import { Given, Then, When } from "cucumber";
import { AddProductPage } from "../page_objects/add-product.page";
import { HomePage } from "../page_objects/home.page";
import { ViewProductPage } from "../page_objects/view-product.page";

const homePage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given('a product doesn\'t exist', async function (dataTable) {
    /*
    * This is where we turn our test data contained in the table in the Feature File
    * (and now a 'datatable') into an array of products ('arrayOfProducts
    */
    const arrayOfProducts = dataTable.hashes();
    /*
    * Then we take the first product in the array (at index 0)
    * and store it in 'product' object located in the World ('this')
    * so we can use it for all steps of the scenario
    */
    this.product = arrayOfProducts[0];
    /*
     * This removes the previous product
     */
    while (await homePage.findProductsInTable(this.product).count() > 0) {
      homePage.findProductsInTable(this.product).first().click();
      viewProductPage.deleteButton.click();
    }
    // Here we make sure that the product hasn't already been created
    // Before we start our test
    return expect(homePage.findProductInTable(this.product).isPresent()).to.eventually.be.false;
  });

When('I add the productThen the product is created', function () {
    homePage.addProductButton.click();
    addProductPage.productNameField.sendKeys(this.product.name);
    addProductPage.productDescriptionField.sendKeys(this.product.description);
    addProductPage.productPriceField.sendKeys(this.product.price);
    return addProductPage.productButtonField.click();
  });

Then('the product is created', function () {
    // Expect the product has now been created and can be seen on the View Product Page
    return expect(viewProductPage.productName(this.product).isPresent()).to.eventually.be.true;
  });
