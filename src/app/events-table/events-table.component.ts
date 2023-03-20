import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent {
  @Input() eventsTableData: any;

  // fun(row)
  // call api using row.id information
  // data <- from API
  // show_card = false initially
  // if data then show_card = true
  //  

}
