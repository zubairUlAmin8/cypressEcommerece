import { PageAction } from "./PageActions";
export function SelectProduct(flowName) {
    cy.readFile('./page-objects/selectProduct.pom.json').then((pomData)=>{
        cy.readFile('./test-data/'+flowName+'.json').then(async (testData)=>{
            PageAction(testData.data.SelectProduct, pomData);
        });
    });
}