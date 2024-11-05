import { Routes } from '@angular/router';
import { AboutpageComponent } from '../aboutpage/about.component';
import { ContactpageComponent } from '../contactpage/contact.component';
import { HomepageComponent } from '../homepage/home.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'contact', component: ContactpageComponent },
];
