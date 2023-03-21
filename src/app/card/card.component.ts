import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
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
  onBackBtnClick(){
    this.backBtnClicked.emit(false)
    // console.log("Emitted value")
  }

}
