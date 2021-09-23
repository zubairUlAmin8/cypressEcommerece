import { PageAction } from "./PageActions";
export function Continue(flowName) {
    cy.readFile('./page-objects/continue.pom.json').then((pomData)=>{
        cy.readFile('./test-data/'+flowName+'.json').then(async (testData)=>{
            PageAction(testData.data.Continue, pomData);
        });
    });
}