import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-card-events-tab',
  templateUrl: './card-events-tab.component.html',
  styleUrls: ['./card-events-tab.component.css']
})
export class CardEventsTabComponent {
  @Input() eventId: string;
  @Output() artistsArray = new EventEmitter<any>();
  faTwitter = faTwitter;
  faFacebook = faFacebook
  eventsData: any;
  eventDateTime: any;
  artistNames: any;
  genre: any;
  priceRange: any;
  statusInfo: any;
  venueName: any;
  ticketUrl: any;
  seatMapSrc: any;
  facebookLink: any;
  twitterLink: any;
  title: any;

  constructor (private http: HttpClient) {}

  ngOnInit(){
    this.getEventInformation();
  }

  getEventInformation(){
    // const formValues = this.eventsForm.value;
    // const queryParams = `?keyword=${formValues.keyword}&distance=${formValues.distance}&location=${formValues.location}&category=${formValues.category}&checkbox=${formValues.checkbox}`;
    // const url = `http://localhost:3000/api/getTableInformation${queryParams}`;
    
    
    const eventCardUrl = `http://localhost:3000/api/getEventInfo?eventId=${this.eventId}`;
    console.log("#### EventsCardUrl: ", eventCardUrl);
    
    // const url = `http://localhost:3000/api/tkm?keyword=${this.eventId}`;
    // console.log(url)
    // let result = this.http.get<any>(url)
    console.log("Making request...")

    let result = this.http.get<any>(eventCardUrl)
    console.log(result.subscribe((data) => {
      this.eventsData = data
      this.eventDateTime = this.eventsData?.dates?.start?.localDate + " " + this.eventsData?.dates?.start?.localTime
      
      
      const artistNames = this.eventsData?._embedded?.attractions?.map(attraction => attraction.name);

      this.artistsArray.emit(artistNames);

      const concatNames = artistNames?.join(' | ');

      this.artistNames = concatNames
      
      this.venueName = this.eventsData?._embedded?.venues[0]?.name;
      
      var genreObj = this.eventsData?.classifications?.[0]

      this.genre = getConcatGenre(genreObj)

      var priceRangeObj = this.eventsData?.priceRanges?.[0]
      if (priceRangeObj) {
        this.priceRange = priceRangeObj.min + " - " + priceRangeObj.max + " USD"
      }

      let statusObj = this.eventsData?.dates?.status?.code
      console.log(statusObj)
      this.statusInfo = setStatusValue(statusObj)

      this.ticketUrl = this.eventsData['url'];

      this.seatMapSrc = this.eventsData?.seatmap?.staticUrl

      this.facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${this.ticketUrl}&amp;src=sdkpreparse`

      this.title = this.eventsData.name;
      this.twitterLink = `http://twitter.com/share?text=${this.title}&url=${this.ticketUrl}`

      console.log("Success!!!!!!!!!!!!!!")
    }))
    console.log("Request complete...")
  }
}

function setStatusValue(statusObj) {
  let statusBtn = document.getElementById("status-info")
    if (statusObj === "onsale") {
      return "On Sale"
  }

  else if (statusObj === "offsale") {
    return "Off Sale"
  }

  else if (statusObj === "cancelled") {
    return "Cancelled"
  }

  else if (statusObj === "postponed") {
    return "Postponed"
  }

  else if (statusObj === "rescheduled") {
    return "Rescheduled"
  } 
  else {
    return ""
  }
}

function getConcatGenre(genreObject: any){
  var genre = [];
  if (genreObject?.segment?.name) {
    genre.push(genreObject.segment.name)
  }
  if (genreObject?.genre?.name) {
    genre.push(genreObject.genre.name)
  }
  if (genreObject?.subGenre?.name) {
    genre.push(genreObject.subGenre.name)
  }
  if (genreObject?.type?.name) {
    genre.push(genreObject.type.name)
  }
  if (genreObject?.subType?.name) {
    genre.push(genreObject.subType.name)
  }
  return genre.join(" | ")
}
