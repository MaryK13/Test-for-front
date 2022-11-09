import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { dataFile } from '../../helpers/data-file';
import { TYPE_ELEMENTS } from '../../helpers/enum.helper';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})

export class ListPageComponent implements OnInit {
  data!: any[];

  dataSource!: any[];
  tableColumns: string[] = [
    'name', 'amount'
  ];

  tabNumber: number = 0;
  types: any[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
    this.types = TYPE_ELEMENTS;
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.queryParamMap;
    this.tabNumber = Number(routeParams.get('tab'));

    this.data = dataFile;
    this.getDataStart();
  }

  getDataStart() {
    this.dataSource = [];
    const elem = this.types.find(x => x.id === this.tabNumber);

    for (let typeElem of this.data) {
      if (typeElem.type === elem.type) {
        typeElem.amount = Math.floor(Math.random() * (4000 - 100) + 100);

        this.dataSource.push(typeElem);
      }
    }
  }

  getDataActive(event: any) {
    const elem = event.target;
    this.dataSource = [];


    for (let countElements of this.data) {
      if (countElements.type === elem.id) {
        countElements.amount = Math.floor(Math.random() * (4000 - 100) + 100);

        this.dataSource.push(countElements);
      }
    }
  }
}
