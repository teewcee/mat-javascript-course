import { $, by, element } from "protractor";

export class HomePage {

    public addProductButton = $("a[href='/product-add']");

    public findProductInTable = (product: myLib.Product) => {
        return element(by.cssContainingText("td.matt-cell", product.name));
    }

}
