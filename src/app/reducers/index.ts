import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuditReducer from './audits.reducer';


export interface State {
  audits : fromAuditReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  audits : fromAuditReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
