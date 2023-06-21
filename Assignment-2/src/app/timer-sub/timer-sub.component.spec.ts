import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSubComponent } from './timer-sub.component';

describe('TimerSubComponent', () => {
  let component: TimerSubComponent;
  let fixture: ComponentFixture<TimerSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerSubComponent]
    });
    fixture = TestBed.createComponent(TimerSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
