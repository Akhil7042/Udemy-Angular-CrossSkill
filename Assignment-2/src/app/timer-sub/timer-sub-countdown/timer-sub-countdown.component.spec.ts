import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSubCountdownComponent } from './timer-sub-countdown.component';

describe('TimerSubCountdownComponent', () => {
  let component: TimerSubCountdownComponent;
  let fixture: ComponentFixture<TimerSubCountdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerSubCountdownComponent]
    });
    fixture = TestBed.createComponent(TimerSubCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
