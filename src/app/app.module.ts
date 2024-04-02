import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import HttpClientModule for making HTTP requests
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsofPetsComponent } from './detailsofpets/detailsofpets.component';
import { ListofPetsComponent } from './listofpets/listofpets.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PetsDataService } from './pet-data.service';

@NgModule({
  declarations: [
    // Declare all components that belong to this module
    AppComponent,
    DetailsofPetsComponent,
    ListofPetsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    // Import BrowserModule and AppRoutingModule
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Import HttpClientModule after BrowserModule
  ],
  providers: [
    // Add services to the providers array
    PetsDataService
  ],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
// app module
