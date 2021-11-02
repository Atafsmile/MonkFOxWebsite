import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtlogsearchbarComponent } from './ctlogsearchbar.component';

describe('CtlogsearchbarComponent', () => {
  let component: CtlogsearchbarComponent;
  let fixture: ComponentFixture<CtlogsearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtlogsearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtlogsearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
