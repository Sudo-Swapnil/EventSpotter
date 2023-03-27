import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-card-artists-tab',
  templateUrl: './card-artists-tab.component.html',
  styleUrls: ['./card-artists-tab.component.css']
})
export class CardArtistsTabComponent {
  intervalSeconds = 0;
  progressSpinner = 95;

  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
