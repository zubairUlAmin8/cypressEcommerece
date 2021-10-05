import { PageAction } from "./PageActions";
export function VerifyFinalMessage(flowName) {
    cy.readFile('./page-objects/verifyFinalMessage.pom.json').then((pomData)=>{
        cy.readFile('./test-data/'+flowName+'.json').then(async (testData)=>{
            PageAction(testData.data.VerifyFinalMessage, pomData);
        });
    });
}