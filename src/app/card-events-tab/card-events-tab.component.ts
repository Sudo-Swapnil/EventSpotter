import { Component } from '@angular/core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-card-events-tab',
  templateUrl: './card-events-tab.component.html',
  styleUrls: ['./card-events-tab.component.css']
})
export class CardEventsTabComponent {
  faTwitter = faTwitter;
  faFacebook = faFacebook
}
