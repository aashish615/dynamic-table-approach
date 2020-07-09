import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-table-column-filter',
  templateUrl: './table-column-filter.component.html',
  styleUrls: ['./table-column-filter.component.scss']
})
export class TableColumnFilterComponent implements OnInit, AfterViewInit {

  @Input() option: any;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.changeEmit();
  }
  onInputChange(e) {
    this.changeEmit();
  }
  changeEmit() {
    let obj: {} = {};
    this.option.map(d => {
      if (d.type == 'checkbox') {
        obj[d.name] = [];
        d.option.map(r => {
          obj[d.name].push({ 'name': r.name, 'value': r.value })
        })
      }
    });
    this.valueChange.emit(obj)
  }
}
