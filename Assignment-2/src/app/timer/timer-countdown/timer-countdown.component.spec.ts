import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCountdownComponent } from './timer-countdown.component';

describe('TimerCountdownComponent', () => {
  let component: TimerCountdownComponent;
  let fixture: ComponentFixture<TimerCountdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerCountdownComponent]
    });
    fixture = TestBed.createComponent(TimerCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
