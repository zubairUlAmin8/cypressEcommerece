import { PageAction } from "./PageActions";
export function Finish(flowName) {
    cy.readFile('./page-objects/finish.pom.json').then((pomData)=>{
        cy.readFile('./test-data/'+flowName+'.json').then(async (testData)=>{
            PageAction(testData.data.Finish, pomData);
        });
    });
}