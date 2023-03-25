import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-card-venue-tab',
  templateUrl: './card-venue-tab.component.html',
  styleUrls: ['./card-venue-tab.component.css']
})
export class CardVenueTabComponent {
  @Input() venueNameFromTable: any;
  venueName: string;
  venueAddress: string;
  venuePhone: string;
  venueOpenHours: string;
  venueGeneralRule: string;
  venueChildRule: string;
  venueData: any;

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  open(content){
    this.modalService.open(content);
  }

  ngOnInit(){
    this.getVenueInformation()
  }

  getVenueInformation(){

    const url = `http://localhost:3000/api/venue?venueName=${this.venueNameFromTable}`;
    console.log(url)
    console.log("Making request...")
    // let result = this.http.get('http://localhost:3000/test/sort')
    let result = this.http.get<any>(url)
    result.subscribe((data) => {
      console.log("Venue data below: -------------->>>>>>>>>>>>>")
      console.log(data)
      this.venueData = data._embedded.venues[0];
      //venueName
      this.venueName = this.venueData.name;
      //venueAddress
      let venueAddressComponents = [];
      if (this.venueData?.address?.line1) {
        venueAddressComponents.push(this.venueData.address.line1)
      }
      if (this.venueData?.city?.name) {
        venueAddressComponents.push(this.venueData?.city.name) 
      }
      if (this.venueData?.state?.name) {
        venueAddressComponents.push(this.venueData?.state?.name)
      }
      this.venueAddress = venueAddressComponents.join(", ");
      //venuePhone
      this.venuePhone = this.venueData?.boxOfficeInfo?.phoneNumberDetail;
      //venueOpenHours
      this.venueOpenHours = this.venueData?.boxOfficeInfo?.openHoursDetail;
      //venueGeneralRule
      this.venueGeneralRule = this.venueData?.generalInfo?.generalRule;
      //venueChildRule
      this.venueChildRule = this.venueData?.generalInfo?.childRule;

    })
    console.log("Request complete...")
  }

}




