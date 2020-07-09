import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
  @Input() tableData: any[];
  @Input() option: any[];
  @Output() actionTriggered = new EventEmitter();

  ngOnInit(): void {
  }
  actionListener(config, rowData) {
    this.actionTriggered.emit({ config, rowData });
  }

  // getCssClassByColumn(rowData, opt) {
  //   let cssClass = '';

  //   switch (opt.key) {
  //     case 'status': {
  //       if (rowData[opt.key] === 'Pending') {
  //         cssClass = 'text-red';
  //       }
  //       if (rowData[opt.key] === 'Refund') {
  //         cssClass = 'text-yellow';
  //       }
  //       if (rowData[opt.key] === 'Paid') {
  //         cssClass = 'text-green';
  //       }
  //     }
  //     default: break;
  //   }
  //   return cssClass;
  // }

  sortingEventHandler() {

  }

}

