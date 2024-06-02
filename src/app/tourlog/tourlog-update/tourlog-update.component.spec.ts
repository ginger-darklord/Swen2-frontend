import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourlogUpdateComponent } from './tourlog-update.component';

describe('TourlogUpdateComponent', () => {
  let component: TourlogUpdateComponent;
  let fixture: ComponentFixture<TourlogUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourlogUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourlogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
