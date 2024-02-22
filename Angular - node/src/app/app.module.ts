import { NgModule } from '@angular/core';
import { HttpClientModule}from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // הוסף זאת
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';



//components
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
// import { DonationsComponent } from './component/donations/donations.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { EventsComponent } from './component/events/events.component';
import { SmartSearchComponent } from './component/smart-search/smart-search.component';
import { ApplyToComponent } from './component/apply-to/apply-to.component';
import { CourseComponent } from './component/course/course.component';
import { EmailComponent } from './component/email/email.component';
import { LoginComponent } from './component/login/login.component';

//primeng
import { CarouselModule } from 'primeng/carousel';
import { SpeedDialModule } from 'primeng/speeddial';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    // DonationsComponent,
    CalendarComponent,
    EventsComponent,
    SmartSearchComponent,
    ApplyToComponent,
    CourseComponent,
    EmailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    MenubarModule,
    RouterModule,
    SpeedDialModule,
    DataViewModule,
    InputTextModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    ToastModule,
    DialogModule,
    HttpClientModule,
    AccordionModule,
    PanelModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    DropdownModule,
    CommonModule,
    CheckboxModule,
    FileUploadModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


