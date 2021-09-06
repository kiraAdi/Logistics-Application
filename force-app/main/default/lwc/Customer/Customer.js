import { LightningElement, api } from 'lwc';

import CUSTOMER from '@salesforce/schema/Customer__c';
import NAME_FIELD from '@salesforce/schema/Customer__c.Name';
import PRODUCT from '@salesforce/schema/Customer__c.Product__c';
import ADDRESS from '@salesforce/schema/Customer__c.Address__c';
import STATUS from '@salesforce/schema/Customer__c.Status__c';
import EMAIL from '@salesforce/schema/Customer__c.Email__c';


export default class Customer extends LightningElement {

    accountObject = CUSTOMER;
    myFields = [NAME_FIELD, PRODUCT, ADDRESS, STATUS,EMAIL];

    handleSubmit(event) {
            console.log('Record ID: ' + event.detail.id);
    }
}
