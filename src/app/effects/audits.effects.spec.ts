import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AuditsEffects } from './audits.effects';

describe('AuditsEffects', () => {
  let actions$: Observable<any>;
  let effects: AuditsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuditsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AuditsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
