import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import {AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import { AddressFormComponent } from './address-form/address-form.component';
import {ServerService} from './server.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizeComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
