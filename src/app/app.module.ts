import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventsTableComponent } from './events-table/events-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//for autocomplete importing thing from material..
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './card/card.component'

//for angular material tabs
import { MatTabsModule } from '@angular/material/tabs'

//icons
import { MatIconModule } from '@angular/material/icon';
import { CardEventsTabComponent } from './card-events-tab/card-events-tab.component';

//fortawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FavouritesComponent,
    EventsTableComponent,
    CardComponent,
    CardEventsTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
