import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventsTableData']){
      this.showCard = false;
    }
  }

  onBackClick(value: boolean){
    this.showCard = value
    // console.log("In parent component: got value: ", value)
  }

  onTableRowClick(rowData: any){
    console.log(rowData)
    this.slRowData = rowData
    // console.log("Setting card view ON")
    this.showCard = true;

  }

}
