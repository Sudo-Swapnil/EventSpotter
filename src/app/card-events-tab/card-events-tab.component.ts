import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-card-events-tab',
  templateUrl: './card-events-tab.component.html',
  styleUrls: ['./card-events-tab.component.css']
})
export class CardEventsTabComponent {
  @Input() eventId: string;
  faTwitter = faTwitter;
  faFacebook = faFacebook

  constructor (private http: HttpClient) {}

  ngOnInit(){
    this.makeGetRequest();
  }

  makeGetRequest(){
    // const formValues = this.eventsForm.value;
    // const queryParams = `?keyword=${formValues.keyword}&distance=${formValues.distance}&location=${formValues.location}&category=${formValues.category}&checkbox=${formValues.checkbox}`;
    // const url = `http://localhost:3000/api/getTableInformation${queryParams}`;
    const url = `http://localhost:3000/api/tkm?keyword=${this.eventId}`;
    console.log(url)

    console.log("Making request...")
    // let result = this.http.get('http://localhost:3000/test/sort')
    let result = this.http.get<any>(url)
    console.log(result.subscribe((data) => {
      console.log("This is the data: ", data)
      console.log("Success!!!!!!!!!!!!!!")
    }))
    console.log("Request complete...")
  }
}
