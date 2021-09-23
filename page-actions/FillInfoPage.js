import { PageAction } from "./PageActions";
export function FillInfoPage(flowName) {
    cy.readFile('./page-objects/fillInfoPage.pom.json').then((pomData)=>{
        cy.readFile('./test-data/'+flowName+'.json').then(async (testData)=>{
            PageAction(testData.data.FillInfoPage, pomData);
        });
    });
}