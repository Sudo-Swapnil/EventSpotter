import { Component, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  faHeart = faHeart
  @Output() backBtnClicked = new EventEmitter<boolean>();
  @Input() sRowData: any;
  eventId: string;
  cardTitle: string;

  ngOnInit(){
    this.eventId = this.sRowData.id
    this.cardTitle = this.sRowData.name
    // console.log("---- Event id ", this.eventId)
  }

  onBackBtnClick(){
    console.log(this.sRowData)
    this.backBtnClicked.emit(false)
    console.log("Emitted value")
  }

}
