import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventsTabComponent } from './card-events-tab.component';

describe('CardEventsTabComponent', () => {
  let component: CardEventsTabComponent;
  let fixture: ComponentFixture<CardEventsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEventsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEventsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
