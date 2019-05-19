import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizeComponent} from './authorize/authorize.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';
import {TrackersComponent} from './trackers/trackers.component';
import {TrackComponent} from './track/track.component';
import {ReturnComponent} from './return/return.component';
import {HiwComponent} from './hiw/hiw.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'hiw', component: HiwComponent},
  { path: 'trackers', component: TrackersComponent},
  { path: 'track', component: TrackComponent},
  { path: 'return', component: ReturnComponent},
  { path: 'auth', component: AuthorizeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
