import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { TableColumnFilterComponent } from './table-column-filter/table-column-filter.component';
import { LimitFilterComponent } from './limit-filter/limit-filter.component';

@NgModule({
  declarations: [
    FilterComponent,
    TableComponent,
    TableColumnFilterComponent,
    LimitFilterComponent
    // PaginationComponent,
    // SideFilterComponent,
    // ExportComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgbDatepickerModule,
    // ReactiveFormsModule,
    // SharedDirectivesModule
  ],
  exports: [
    FilterComponent,
    TableComponent,
    TableColumnFilterComponent,
    LimitFilterComponent
  ]
})
export class SharedModule { }

