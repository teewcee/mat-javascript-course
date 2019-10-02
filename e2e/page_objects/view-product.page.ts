import { $, by, element } from "protractor";

export class ViewProductPage {

    public deleteButton = $("mat-card-actions[_ngcontent-c6] a[ng-reflect-color='warn']");

    public productName = (product: myLib.Product) => {
        return element(by.cssContainingText("h2", product.name));

    }

}
