import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuditsActions from "./actions/audits.actions";
import * as AuditsSelectors from "./selectors/audits.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-primeng-table-with-ngrx-example';
  pageSize = 10;
  audits$: any;
  totalItems$: any;
  cols: any[];
  first = 0;
  rows = 10;

  constructor(private readonly store: Store) {
    this.store.dispatch(AuditsActions.loadAuditss({ pageIndex: 0, pageSize: this.pageSize }));
    this.cols = [
      { field: '_id', header: 'id' },
      { field: 'uri', header: 'uri' },
      { field: 'serverIp', header: 'serverIp' },
      { field: 'clientIp', header: 'clientIp' },
      { field: 'statusCode', header: 'statusCode' },
      { field: 'statusMessage', header: 'statusMessage' },
      { field: 'hostname', header: 'hostname' },
      { field: 'email', header: 'email' },
      { field: 'createdAt', header: 'createdAt' },
      { field: 'updatedAt', header: 'updatedAt' },
  ];
  }

  ngOnInit(): void {
    this.audits$ = this.store.select(AuditsSelectors.getAudits);
    this.totalItems$ = this.store.select(AuditsSelectors.getTotalItems);

  }
}
