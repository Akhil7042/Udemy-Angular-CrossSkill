import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerStartComponent } from './timer-start.component';

describe('TimerStartComponent', () => {
  let component: TimerStartComponent;
  let fixture: ComponentFixture<TimerStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerStartComponent]
    });
    fixture = TestBed.createComponent(TimerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
