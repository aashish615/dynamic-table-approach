import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, AfterViewInit, OnChanges{
  emittedNoOfTimes: number = 0;
  sideFilterData: any = {};

  @Input() sideFilterConfiguration: any;
  @Output() sideFilterInitialValue = new EventEmitter();
  @Output() sideFilterChange = new EventEmitter();

  constructor() { }


  ngOnChanges() { }

  ngAfterViewInit(): void { }



  ngOnInit(): void { }

  valueChange(e) {
    this.emittedNoOfTimes++;
    if (this.emittedNoOfTimes > this.lengthObject) {
      this.sideFilterData = { ...this.sideFilterData, ...e };
      this.sideFilterChange.emit(this.sideFilterData);
      console.log("sideFilterChange", this.sideFilterData)
    }
    else if (this.emittedNoOfTimes == this.lengthObject) {
      this.sideFilterData = { ...this.sideFilterData, ...e };
      this.sideFilterInitialValue.emit(this.sideFilterData);
      console.log("sideFilterInitialValue", this.sideFilterData)
    } else {
      this.sideFilterData = { ...this.sideFilterData, ...e };
    }
  }


  get lengthObject() {
    let length = 0;
    this.sideFilterConfiguration.forEach(d => {
      if (d.isVisible) length++;
    })
    return length;
  };
}
