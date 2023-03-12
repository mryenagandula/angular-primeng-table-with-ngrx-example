import * as fromAudits from './audits.actions';

describe('loadAuditss', () => {
  it('should return an action', () => {
    expect(fromAudits.loadAuditss().type).toBe('[Audits] Load Auditss');
  });
});
