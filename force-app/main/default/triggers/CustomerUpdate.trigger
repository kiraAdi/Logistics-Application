trigger CustomerUpdate on Products__c (after update) {
    CustomerUpdate.ctr(Trigger.New);
}
