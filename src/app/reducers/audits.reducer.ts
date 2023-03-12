import { Action, createReducer, on } from '@ngrx/store';
import * as AuditAuctions from "../actions/audits.actions";

export const auditsFeatureKey = 'audits';

export interface State{
  loading: boolean;
  errors: any;
  audits: any[];
  totalItems: number;
  pageIndex: number;
  pageSize: number;
}

export const initialState: State = {
  loading: false,
  errors: null,
  audits: [],
  totalItems: 0,
  pageIndex: 0,
  pageSize: 10
};


export const reducer = createReducer(
  initialState,
  on(AuditAuctions.loadAuditss, (state,{pageIndex,pageSize}) => ({
    ...state,
    loading:false, 
    error:null,
    pageIndex,
    pageSize
  })),
  on(AuditAuctions.loadAuditssSuccess, (state, { data }) => ({
    ...state,
    audits:data.audits,
    loading: true,
    totalItems:data.totalCount,
    error: null
  })),
  on(AuditAuctions.loadAuditssFailure, (state,{error}) => ({...state,loading: false, error})),
);

