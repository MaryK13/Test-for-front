import { Component, OnInit } from '@angular/core';
import { dataFile } from '../../helpers/data-file';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})

export class SummaryPageComponent implements OnInit {
  total!: number;
  incomeCount: number = 0;
  investmentsCount: number = 0;
  outcomeCount: number = 0;
  loansCount: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.total = dataFile.length;
    const income: any[] = [];
    const investments: any[] = [];
    const outcome: any[] = [];
    const loans: any[] = [];

    for (let countElements of dataFile) {
      if (countElements.type === 'income') {
        income.push(countElements);
      }
      if (countElements.type === 'investment') {
        investments.push(countElements);
      }
      if (countElements.type === 'outcome') {
        outcome.push(countElements);
      }
      if (countElements.type === 'loan') {
        loans.push(countElements);
      }
    }

    this.incomeCount = income.length;
    this.investmentsCount = investments.length;
    this.outcomeCount = outcome.length;
    this.loansCount = loans.length;
  }
}
