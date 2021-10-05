import { ActionClass } from '../page-actions/PageActions';

describe('Run Test Scenarios', ()=>{
    var actionObj;    
    const flow = require('./../test-flows/order-backpack-jacket.json');
    before(()=>{
        actionObj = new ActionClass();
    })
    it('Runs order-backpack-jacket flow', () => {
        flow.forEach((testFunc => {
            actionObj[testFunc]("order-backpack-jacket");
        }));
    });
})