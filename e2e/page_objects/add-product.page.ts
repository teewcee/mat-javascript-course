import { $, by, element } from "protractor";

export class AddProductPage{
    public productNameField = $("input[formcontrolname='prod_name']");
    public productDescriptionField = $("input[formcontrolname='prod_desc']");
    public productPriceField = $("input[formcontrolname='prod_price']");
    public productButtonField = $("button[type='submit']");

}
