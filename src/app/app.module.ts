import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import {AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReturnComponent } from './return/return.component';
import { TrackersComponent } from './trackers/trackers.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { AddressFormComponent } from './address-form/address-form.component';
import {ServerService} from './server.service';
import { NavComponent } from './nav/nav.component';
import { HiwComponent } from './hiw/hiw.component';
import {FoundComponent} from './found/found.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizeComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    FoundComponent,
    ReturnComponent,
    TrackersComponent,
    ContactComponent,
    PageNotFoundComponent,
    AddressFormComponent,
    NavComponent,
    HiwComponent
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
