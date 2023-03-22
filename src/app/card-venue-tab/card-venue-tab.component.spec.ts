import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVenueTabComponent } from './card-venue-tab.component';

describe('CardVenueTabComponent', () => {
  let component: CardVenueTabComponent;
  let fixture: ComponentFixture<CardVenueTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVenueTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVenueTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
