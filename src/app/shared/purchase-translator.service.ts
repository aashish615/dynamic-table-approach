import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PurchaseTranslatorService {

  url: string = 'assets/json/purchase-history-side-filter.json';
  tableOption: any[] = [
    {
      visible: true,
      key: 'eventId',
      colHeading: 'Id',
    },
    {
      visible: true,
      key: 'user',
      colHeading: 'User',
    },
    {
      visible: true,
      key: 'medium',
      colHeading: 'Medium',
    },
    {
      visible: true,
      key: 'status',
      colHeading: 'Status',
    },
    {
      visible: true,
      key: 'referenceNo',
      colHeading: 'Reference. No',
    },
    {
      visible: true,
      key: 'total',
      colHeading: 'Total',
    },
    {
      visible: true,
      key: 'discount',
      colHeading: 'Discount',
    },
    {
      visible: true,
      key: 'net',
      colHeading: 'Net',
    },
    {
      visible: true,
      key: 'payable',
      colHeading: 'Payable',
    },
    {
      visible: true,
      key: 'date',
      colHeading: 'Date',
    },
    {
      visible: true,
      key: 'action',
      colHeading: 'Action',
      config: [{
        type: 'download',
        input: 'button',
        icon: 'fa fa-eye',
        emitData: true,
        redirectLink: false,
        Link: ''
      }]
    }
  ];
  constructor(private http: HttpClient) {

  }

  PurchaseHistoryFilterConfig() {
    return this.http.get(this.url)
  }

  tableColumnListener(column) {
    this.tableOption.forEach(tbOpt => {
      column.forEach(ele => {
        if (tbOpt.key === ele.name) {
          tbOpt.visible = ele.value
        }
      });

    })
    return this.tableOption;
  }
}
