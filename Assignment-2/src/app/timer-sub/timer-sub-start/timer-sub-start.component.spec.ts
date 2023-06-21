import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSubStartComponent } from './timer-sub-start.component';

describe('TimerSubStartComponent', () => {
  let component: TimerSubStartComponent;
  let fixture: ComponentFixture<TimerSubStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerSubStartComponent]
    });
    fixture = TestBed.createComponent(TimerSubStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
