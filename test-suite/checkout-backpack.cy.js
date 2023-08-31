import { ActionClass } from '../page-actions/PageActions';

describe('Run Test Scenarios', ()=>{
    var actionObj;    
    const flow = require('./../test-flows/checkout-backpack.json');
    before(()=>{
        actionObj = new ActionClass();
    })
    it('Runs checkout-backpack flow', () => {
        flow.forEach((testFunc => {
            actionObj[testFunc]("checkout-backpack");
        }));
    });
})