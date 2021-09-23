import { PageAction } from "./PageActions";
export function OpenCart(flowName) {
    cy.readFile('./page-objects/openCart.pom.json').then((pomData)=>{
        cy.readFile('./test-data/'+flowName+'.json').then(async (testData)=>{
            PageAction(testData.data.OpenCart, pomData);
        });
    });
}