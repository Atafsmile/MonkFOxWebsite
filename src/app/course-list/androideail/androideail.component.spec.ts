import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroideailComponent } from './androideail.component';

describe('AndroideailComponent', () => {
  let component: AndroideailComponent;
  let fixture: ComponentFixture<AndroideailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroideailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroideailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
