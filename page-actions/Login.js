import { PageAction } from "./PageActions";
export function Login(flowName) {
    cy.readFile('./page-objects/login.pom.json').then((pomData)=>{
        cy.readFile('./test-data/'+flowName+'.json').then(async (testData)=>{
            await cy.visit('/');
            PageAction(testData.data.Login, pomData);
        });
    });
}