import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitFilterComponent } from './limit-filter.component';

describe('LimitFilterComponent', () => {
  let component: LimitFilterComponent;
  let fixture: ComponentFixture<LimitFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
