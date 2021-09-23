import { PageAction } from "./PageActions";
export function Checkout(flowName) {
    cy.readFile('./page-objects/checkout.pom.json').then((pomData)=>{
        cy.readFile('./test-data/'+flowName+'.json').then(async (testData)=>{
            PageAction(testData.data.Checkout, pomData);
        });
    });
}