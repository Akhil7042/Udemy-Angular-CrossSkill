import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdivComponent } from './ddiv.component';

describe('DdivComponent', () => {
  let component: DdivComponent;
  let fixture: ComponentFixture<DdivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdivComponent]
    });
    fixture = TestBed.createComponent(DdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
