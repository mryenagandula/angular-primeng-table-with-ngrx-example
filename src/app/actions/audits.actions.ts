import { createAction, props } from '@ngrx/store';

export const loadAuditss = createAction(
  '[Audits] Load Auditss',
  props<{ pageIndex: number, pageSize: number }>()
);

export const loadAuditssSuccess = createAction(
  '[Audits] Load Auditss Success',
  props<{ data: any }>()
);

export const loadAuditssFailure = createAction(
  '[Audits] Load Auditss Failure',
  props<{ error: any }>()
);
