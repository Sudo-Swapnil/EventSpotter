import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent {
  @Input() eventsTableData: any;

  showCard = true; // change to false later

  onBackClick(value: boolean){
    this.showCard = value
    console.log("In parent component: got value: ", value)
  }

  onTableRowClick(){
    this.showCard = true;
  }

  // fun(row)
  // call api using row.id information
  // data <- from API
  // show_card = false initially
  // if data then show_card = true
  //  

}
