import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent {
  @Input() eventsTableData: any;
  @Output() selectedRowData = new EventEmitter<any>();

  showCard = false;
  slRowData: any;
  onBackClick(value: boolean){
    this.showCard = value
    console.log("In parent component: got value: ", value)
  }

  onTableRowClick(rowData: any){
    console.log(rowData)
    this.slRowData = rowData
    console.log("Setting card view ON")
    this.showCard = true;

  }

  // fun(row)
  // call api using row.id information
  // data <- from API
  // show_card = false initially
  // if data then show_card = true
  //  

}
