//This is an important file where all the user controls logic are present

import { Login } from "./Login";
import { SelectProduct } from "./SelectProduct";
import { OpenCart } from "./OpenCart";
import { Checkout } from "./Checkout";
import { FillInfoPage } from "./FillInfoPage";
import { Continue } from "./Continue";
import { VerifyCheckout } from "./VerifyCheckout";
import { Finish } from "./Finish";
import { VerifyFinalMessage } from "./VerifyFinalMessage";
export class ActionClass {
  constructor() {
    this.Login = Login;
    this.SelectProduct = SelectProduct;
    this.OpenCart = OpenCart;
    this.Checkout = Checkout;
    this.FillInfoPage = FillInfoPage;
    this.Continue = Continue;
    this.VerifyCheckout = VerifyCheckout;
    this.Finish = Finish;
    this.VerifyFinalMessage = VerifyFinalMessage;
  }
}

export function PageAction(testData, pomData) {
  var evaluate = (testData, index) => {
    Object.keys(testData).forEach((data) => {
      var value = testData[data].value;
      var assert = testData[data].assert;
      var assert_value = testData[data].assert_value;
      var pageObject = pomData[data];
      if (!!value) {
        cy.get(pomData[data]).then((element) => {
          if (element[0].tagName === "SPAN") {
            pageObject = pageObject + ">input";
          }
          cy.get(pageObject)
            // .should("be.visible")
            // .and("be.enabled")
            .then(() => {
              var element = cy.$$(pageObject);
              switch (element[0].tagName) {
                case "INPUT":
                  switch (element[0].type) {
                    case "radio":
                      cy.get(pageObject + "[value=" + value + "]")
                        .eq(index)
                        .check()
                        .focus()
                        .blur();
                      break;
                    case "submit":
                      cy.get(pageObject).click();
                      break;
                    case "text":
                    case "password":
                      cy.get(pageObject).eq(index).type(value).focus().blur();
                      break;
                  }
                  break;
                case "SELECT":
                  cy.get(pageObject).eq(index).select(value).focus().blur();
                  break;
                case "BUTTON":
                case "A":
                  cy.get(pageObject).click();
                  break;
              }
            });
        });
      }
      if (!!assert) {
        cy.get(pomData[data])
          .eq(index)
          .should("be." + testData[data].assert);
      }
      if (!!assert_value) {
        cy.get(pomData[data]).eq(index).invoke('text').should('eq', testData[data].assert_value);
      }
    });
  };
  testData.forEach((data, index) => {
    evaluate(data, index);
  });
}
