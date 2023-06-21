import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSubStartCountComponent } from './timer-sub-start-count.component';

describe('TimerSubStartCountComponent', () => {
  let component: TimerSubStartCountComponent;
  let fixture: ComponentFixture<TimerSubStartCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerSubStartCountComponent]
    });
    fixture = TestBed.createComponent(TimerSubStartCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
