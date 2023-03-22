import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArtistsTabComponent } from './card-artists-tab.component';

describe('CardArtistsTabComponent', () => {
  let component: CardArtistsTabComponent;
  let fixture: ComponentFixture<CardArtistsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardArtistsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardArtistsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
