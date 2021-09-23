import { PageAction } from "./PageActions";
export function VerifyCheckout(flowName) {
    cy.readFile('./page-objects/verifyCheckout.pom.json').then((pomData)=>{
        cy.readFile('./test-data/'+flowName+'.json').then(async (testData)=>{
            PageAction(testData.data.VerifyCheckout, pomData);
        });
    });
}