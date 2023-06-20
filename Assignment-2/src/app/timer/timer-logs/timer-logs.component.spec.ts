import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLogsComponent } from './timer-logs.component';

describe('TimerLogsComponent', () => {
  let component: TimerLogsComponent;
  let fixture: ComponentFixture<TimerLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerLogsComponent]
    });
    fixture = TestBed.createComponent(TimerLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
