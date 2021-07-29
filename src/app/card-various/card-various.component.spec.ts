import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVariousComponent } from './card-various.component';

describe('CardVariousComponent', () => {
  let component: CardVariousComponent;
  let fixture: ComponentFixture<CardVariousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVariousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVariousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
