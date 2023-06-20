import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerStartCountComponent } from './timer-start-count.component';

describe('TimerStartCountComponent', () => {
  let component: TimerStartCountComponent;
  let fixture: ComponentFixture<TimerStartCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerStartCountComponent]
    });
    fixture = TestBed.createComponent(TimerStartCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
