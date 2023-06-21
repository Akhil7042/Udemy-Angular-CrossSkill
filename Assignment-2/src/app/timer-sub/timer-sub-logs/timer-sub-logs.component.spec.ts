import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSubLogsComponent } from './timer-sub-logs.component';

describe('TimerSubLogsComponent', () => {
  let component: TimerSubLogsComponent;
  let fixture: ComponentFixture<TimerSubLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerSubLogsComponent]
    });
    fixture = TestBed.createComponent(TimerSubLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
