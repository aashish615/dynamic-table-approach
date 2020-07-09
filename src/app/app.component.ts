import { Component } from '@angular/core';
import { PurchaseTranslatorService } from './shared/purchase-translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'commonTableFilter';

  // dynamic table options

  tableData: any = [
    {
      eventId: '2321',
      user: 'NASA meet',
      medium: 'Talview',
      status: 'Requested',
      referenceNo: '#ASD1',
      total: '3245',
      discount: '100',
      net: '0',
      payable: '345',
      date: '2020-3-6'
    },
    {
      eventId: '2321',
      user: 'NASA meet',
      medium: 'Talview',
      status: 'Requested',
      referenceNo: '#ASD1',
      total: '3245',
      discount: '100',
      net: '0',
      payable: '345',
      date: '2020-3-6'
    },
    {
      eventId: '2321',
      user: 'NASA meet',
      medium: 'Talview',
      status: 'Requested',
      referenceNo: '#ASD1',
      total: '3245',
      discount: '100',
      net: '0',
      payable: '345',
      date: '2020-3-6'
    }
  ];
  tableOption: any = this.translator.tableOption;


  ngOnInit(): void { }

  //filter option input
  sideFilterConfiguration:any=[
    {
      "typeOfFilter": "input-filter",
      "isVisible": true,
      "option": [
        {
          "text": "Search",
          "type": "input",
          "placeholder": "Search Event Name...",
          "name": "search",
          "value": "event",
          "emit": [
            "onclick"
          ]
        }
      ]
    },
    {
      "typeOfFilter": "list-filter",
      "isVisible": true,
      "spacing": "pt-4",
      "option": [
        {
          "text": "Period",
          "name": "period",
          "type": "radio",
          "value": "quarterly",
          "option": [
            {
              "text": "Quarterly",
              "name": "quarterly",
              "value": "quarterly",
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Monthly",
              "name": "monthly",
              "value": "monthly",
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Yearly",
              "name": "yearly",
              "value": "yearly",
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Weekly",
              "name": "weekly",
              "value": "weekly",
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Custom",
              "name": "custom",
              "value": "custom",
              "emit": [
                "onclick",
                "onchange"
              ],
              "option": [
                {
                  "text": "To",
                  "class": "to-field",
                  "name": "to",
                  "value": "2020-07-09T08:22:38.254Z",
                  "emit": [
                    "onclick",
                    "onchange"
                  ]
                },
                {
                  "text": "From",
                  "class": "from-field",
                  "name": "from",
                  "value": "2020-07-09T08:22:38.254Z",
                  "emit": [
                    "onclick",
                    "onchange"
                  ]
                }
              ]
            }
          ]
        },
        {
          "text": "Status",
          "name": "status",
          "type": "checkbox",
          "option": [
            {
              "text": "Paid",
              "name": "paid",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Unpaid",
              "name": "unpaid",
              "value": false,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Refund",
              "name": "refund",
              "value": false,
              "emit": [
                "onclick",
                "onchange"
              ]
            }
          ]
        },
        {
          "name": "organiser",
          "text": "Organiser",
          "type": "dropdown",
          "value": "abc",
          "option": [
            {
              "name": "ABC Company",
              "value": "abc"
            },
            {
              "name": "FZX Company",
              "value": "fzx"
            },
            {
              "name": "KSL Company",
              "value": "ksl"
            }
          ]
        }
      ]
    },
    {
      "typeOfFilter": "table-column-filter",
      "isVisible": true,
      "option": [
        {
          "primaryHeading": "In Table Data",
          "isToastForPrimaryHeader": true,
          "toastForPrimaryHeaderText": "Only 8 will be visible",
          "secondaryHeading": "Name",
          "name": "tableCol",
          "type": "checkbox",
          "option": [
            {
              "text": "Event Id",
              "name": "eventId",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "User",
              "name": "user",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Medium",
              "name": "medium",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Status",
              "name": "status",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Reference No",
              "name": "referenceNo",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Total",
              "name": "total",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Discount",
              "name": "discount",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Net",
              "name": "net",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Payable",
              "name": "payable",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            },
            {
              "text": "Date",
              "name": "date",
              "value": true,
              "emit": [
                "onclick",
                "onchange"
              ]
            }
          ]
        }
      ]
    },
    {
      "typeOfFilter": "limit-filter",
      "isVisible": true,
      "option": [
        {
          "name": "entries",
          "text": "Show Entries",
          "type": "dropdown",
          "value": "15",
          "option": [
            {
              "name": "15 Entry",
              "value": "15"
            },
            {
              "name": "20 Entry",
              "value": "20"
            },
            {
              "name": "25 Entry",
              "value": "25"
            }
          ]
        }
      ]
    }
  ]
  constructor(private translator: PurchaseTranslatorService) {
    this.translator.PurchaseHistoryFilterConfig().subscribe((res) => {
    this.sideFilterConfiguration = res;
    })
  }

  tableActionTriggered(e) {
    console.log("tableActionTriggered",e);

  }

  sideFilterInitialValue(e) {
    console.log("initial value of side filter :: ", e)
    if(e && e.tableCol){
      this.tableColumnListener(e.tableCol)
    }
  }
  sideFilterChange(e) {
    console.log('side filter value :: ', e);
    if(e && e.tableCol){
      this.tableColumnListener(e.tableCol)
    }
  }


  tableColumnListener(col){
   this.tableOption =  this.translator.tableColumnListener(col);
  }




}
