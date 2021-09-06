public class CustomerUpdate {
    public static void ctr(List<Products__c> a ) 
    {
  
      Map<ID, Customer__c> custr = new Map<ID, Customer__c>(); 
      List<Id> NewList = new List<Id>();

  for (Products__c detail : a)
  {
    NewList.add(detail.Customer__c);
  }

  Customer__c custr = [SELECT id, Name__c FROM Customer__c WHERE ID IN :NewList];

  for (Products__c b : a)
  {
    Customer__c p = custr.get(b.Customer__c);
     p.Name__c = b.Name;
     p.Price__c = b.Price__c;

  }
  update custr.values();
    }
}
