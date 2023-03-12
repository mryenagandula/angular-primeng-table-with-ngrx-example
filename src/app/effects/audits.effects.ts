import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuditsService } from '../apis/audits.service';
import { map, catchError, mergeMap } from 'rxjs/operators';
import * as AuditsActions from "../actions/audits.actions";
import { of } from 'rxjs';

@Injectable()
export class AuditsEffects {
  constructor(private actions$: Actions, private auditsService: AuditsService) { }

  loadAudits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuditsActions.loadAuditss),
      map((action: any) => action),
      mergeMap((action: any) => {
        return this.auditsService.loadAudits(action.pageIndex, action.pageSize).pipe(
          map(data => AuditsActions.loadAuditssSuccess({ data })),
          catchError(error => of(AuditsActions.loadAuditssFailure({ error })))
        );
      })
    )
  )
}
