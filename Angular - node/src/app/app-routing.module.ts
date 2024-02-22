import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { SmartSearchComponent } from './component/smart-search/smart-search.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { EventsComponent } from './component/events/events.component';
// import { DonationsComponent } from './component/donations/donations.component';
import { ApplyToComponent } from './component/apply-to/apply-to.component';
import { EmailComponent } from './component/email/email.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'donations', component: DonationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'events', component: EventsComponent },
  { path: 'smart-search', component: SmartSearchComponent },
  { path: 'apply', component: ApplyToComponent},
  { path: 'login', component: LoginComponent},
  { path: 'email', component: EmailComponent}
  // נתיבים נוספים...
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


