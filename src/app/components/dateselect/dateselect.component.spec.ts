import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateselectComponent } from './dateselect.component';

describe('DateselectComponent', () => {
  let component: DateselectComponent;
  let fixture: ComponentFixture<DateselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateselectComponent]
    });
    fixture = TestBed.createComponent(DateselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
