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
  venueLatitute: any;
  venueLongiture: any;
  mapOptions: google.maps.MapOptions;
  mapMarker: any;

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  open(content){
    this.modalService.open(content);
  }

  ngOnInit(){
    this.getVenueInformation()
    // let favTest = [
    //   {
    //     "Date": "2023-03-20",
    //     "Event": "Concert",
    //     "Category": "Music",
    //     "Venue": "Madison Square Garden",
    //     "Favorite": true
    //   },
    //   {
    //     "Date": "2023-04-02",
    //     "Event": "Basketball Game",
    //     "Category": "Sports",
    //     "Venue": "Barclays Center",
    //     "Favorite": false
    //   },
    //   {
    //     "Date": "2023-04-15",
    //     "Event": "Musical",
    //     "Category": "Theater",
    //     "Venue": "Broadway Theatre",
    //     "Favorite": true
    //   },
    //   {
    //     "Date": "2023-05-01",
    //     "Event": "Comedy Show",
    //     "Category": "Entertainment",
    //     "Venue": "Comedy Cellar",
    //     "Favorite": false
    //   }
    // ]
    // localStorage.setItem("favoriteEvents", JSON.stringify(favTest)); //TODO remove this
  }

  getVenueInformation(){
    // const url = `http://localhost:3000/api/venue?venueName=${this.venueNameFromTable}`;
    // console.log(url)
    console.log("Making request...")
    // let result = this.http.get('http://localhost:3000/test/sort')
    // let result = this.http.get<any>(url)

    const venueDetailsUrl = `http://localhost:3000/api/getVenueInfo?venueName=${this.venueNameFromTable}`;
    console.log(venueDetailsUrl)
    let result = this.http.get<any>(venueDetailsUrl)
    result.subscribe((data) => {
      console.log("Venue data below: -------------->>>>>>>>>>>>>")
      console.log(data)
      this.venueData = data;
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
      //venueLat and long:
      this.venueLatitute = parseFloat(this.venueData?.location?.latitude)
      this.venueLongiture = parseFloat(this.venueData?.location?.longitude)
      this.mapOptions = {
        center: { 
          lat: this.venueLatitute,
          lng: this.venueLongiture
        },
        zoom: 14
      };
      this.mapMarker = {
        position: {
          lat: this.venueLatitute,
          lng: this.venueLongiture 
        },
     }

    })
    console.log("Request complete...")
  }

  showVenueHours = false;
  showVenueGeneralRules = false;
  showVenueChildRules = false;
  
  
}




