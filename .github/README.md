# cypress-automation-framework

### **Commands**:
**npm run all**: Runs all the flows <br/>
**npm run cy-open**: Opens the Cypress terminal <br/>
**npm run flow**: Runs a particular flow (i.e. npm run flow "test-suite/checkout-backpack.spec.js) <br/>

### **Folder Structure**:
**test-suite**: Contains all the spec files <br/>
**test-flows**: Contains the sequence of flow for a particular spec file e.g. [Login, SelectProduct, OpenCart] <br/>
**page-object-models**: Contains all the dom elements for a particular page (in this case data-test, you may include class or id as well) <br/>
**page-actions**: Contains the definition for the action mentioned in the flow e,g, Login.js which has login what Login action should do. This folder also has PageAction.js file which contains the base logic of handling all the browser controls.
**test-data**: Contains the test data in a json format for all the flows

## How to integrate this with your app:
1. Go to cypress.json file and add your application url in the baseUrl key
2. Add the spec file in the test-suite folder for the flow which you want to test, you can copy the code from the example and rename it accordingly
3. Create your flow file in json format inside the test-flow folder
4. Start defining your flow by adding the respective js files in the page-action folder, also add the reference in PageActions.js file. You can copy the code in the example and rename few parameters accordingly as most of the flow are going to have a similar code
5. Add respective page pom.json file inside the page-object-models folder, this would have the identifiers of all controls in a particular page. Design your application in such a way that each control should have some unique identifier, similar to the example app here which uses data-test as an identifier. If there are multiple controls with same identifier value then you can use classes or eq (check verifyCheckout.pom.json)
6. Add test data for a particular flow in a json format and use the key as the name defined in the respective pom.json file
7. Please make sure you use the correct naming convention as it is important to link the flows to test-data and actions

<br/>

### **Good Luck Automating!** :)
