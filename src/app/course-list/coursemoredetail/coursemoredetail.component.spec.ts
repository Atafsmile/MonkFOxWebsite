import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursemoredetailComponent } from './coursemoredetail.component';

describe('CoursemoredetailComponent', () => {
  let component: CoursemoredetailComponent;
  let fixture: ComponentFixture<CoursemoredetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursemoredetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursemoredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
