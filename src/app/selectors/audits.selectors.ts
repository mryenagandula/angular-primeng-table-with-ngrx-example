import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuditReducer from '../reducers/audits.reducer';

export const getAuditsState = createFeatureSelector<fromAuditReducer.State>('audits');

export const loading = createSelector(
    getAuditsState,
    (state: fromAuditReducer.State) => state.loading
);

export const getAudits = createSelector(
    getAuditsState,
    (state: fromAuditReducer.State) => state.audits
);
export const getTotalItems = createSelector(
    getAuditsState,
    (state: fromAuditReducer.State) => state.totalItems
);
