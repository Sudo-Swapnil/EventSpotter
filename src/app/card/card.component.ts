import { Component, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';
import { faHeart, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  isFavorite = false
  faHeart = faHeart
  @Output() backBtnClicked = new EventEmitter<boolean>();
  @Input() sRowData: any;
  eventId: string;
  cardTitle: string;
  venueName: string;
  artistArray: any;

  ngOnInit(){
    this.eventId = this.sRowData.id
    this.cardTitle = this.sRowData.name
    this.venueName = this.sRowData._embedded.venues[0].name
    console.log("++++++++++ Venue name: ", this.venueName);
    // console.log("---- Event id ", this.eventId)
    var currentEvent = {
      'Date': this.sRowData.dates?.start?.localDate,
      'Event': this.sRowData.name,
      'Category': this.sRowData.classifications[0]?.segment?.name,
      'Venue': this.sRowData._embedded?.venues[0]?.name
    }
    var favEvents = JSON.parse(localStorage.getItem("favoriteEvents"));
    if (favEvents) {
       this.isFavorite = favEvents.some(json => JSON.stringify(json) === JSON.stringify(currentEvent));
       console.log("IS EVENT ALREADY FAVORITE: ", this.isFavorite);
    }

  }

  onBackBtnClick(){
    console.log(this.sRowData)
    this.backBtnClicked.emit(false)
    console.log("Emitted value")
  }

  artistArrayHandler(data: any){
    this.artistArray = data;
    console.log("GOT DATA FROM EVENTS: ",this.artistArray);
  }

  setFavorite(){
    console.log("----------- FAVORITE IS SET ------------")
    console.log(this.sRowData)
    this.isFavorite = !this.isFavorite
    var favEvents = JSON.parse(localStorage.getItem("favoriteEvents"));
    console.log("PUSHING NEW FAVORITE")
    var newFavEvent = {
      'Date': this.sRowData.dates?.start?.localDate,
      'Event': this.sRowData.name,
      'Category': this.sRowData.classifications[0]?.segment?.name,
      'Venue': this.sRowData._embedded?.venues[0]?.name
    }
    if (favEvents){
      favEvents.push(newFavEvent)
    }
    else {
      favEvents = [newFavEvent]
    }
    
    localStorage.setItem("favoriteEvents", JSON.stringify(favEvents));
    console.log("----------- FAVORITE IS END ------------")
  }

  unsetFavorite(){
    console.log("----------- UNSETFAVORITE ------------")
    console.log(this.sRowData)
    this.isFavorite = !this.isFavorite
    var favEvents = JSON.parse(localStorage.getItem("favoriteEvents"));
    console.log("UNSET FAVORITE")
    var currFavEvent = {
      'Date': this.sRowData.dates?.start?.localDate,
      'Event': this.sRowData.name,
      'Category': this.sRowData.classifications[0]?.segment?.name,
      'Venue': this.sRowData._embedded?.venues[0]?.name
    }
    
    const index = favEvents.findIndex(obj => JSON.stringify(obj) === JSON.stringify(currFavEvent));
    favEvents.splice(index, 1);
        
    localStorage.setItem("favoriteEvents", JSON.stringify(favEvents));
    console.log("----------- UNSET FAV IS END ------------")
  }

}
