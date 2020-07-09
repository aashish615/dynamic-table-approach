import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-limit-filter',
  templateUrl: './limit-filter.component.html',
  styleUrls: ['./limit-filter.component.scss']
})
export class LimitFilterComponent implements OnInit,AfterViewInit {

  constructor() { }

  @Input() option: any;
  @Output() valueChange = new EventEmitter();

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
      if (d.type == 'dropdown') {
        obj[d.name] = d.value;
      }
    });
    this.valueChange.emit(obj)
  }
}
