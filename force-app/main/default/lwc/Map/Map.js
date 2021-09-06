import { LightningElement, track } from 'lwc';
const values = [ 'Customer__c.Location__Latitude__s', 'Customer__c.Location__Longitude__s' ];
export default class Map extends LightningElement {

	@track mapMarkers = [];
	loadCustomer({ data }) 
	{
		 if (data)
		  {
			const Lat = data.values.Location__Latitude__s.value;
			const Long = data.values.Location__Longitude__s.value;
			this.mapMarkers = [{ location: { Lat, Long } }];
		  }
	}
	
}
