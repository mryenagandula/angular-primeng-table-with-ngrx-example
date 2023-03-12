export interface AuditState {
    loading: boolean,
    error: any,
    audits: any[],
    totalItems: number,
    pageIndex: number,
    pageSize: number
}