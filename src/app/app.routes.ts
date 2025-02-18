import { Routes } from '@angular/router';
import { SmartBandListComponent } from './components/features/smart-band-list/smart-band-list.component';
import {HomeComponent} from './components/features/home/home.component';
import {LoginComponent} from './components/features/Auth/login/login.component';
import {RegisterComponent} from './components/features/Auth/register/register.component';
import {AboutPageComponent} from './components/features/about-page/about-page.component';
import {DashboardAdminComponent} from './components/features/dashboard-admin/dashboard-admin.component';
import {ContactComponent} from './components/features/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'smart-bands', component: SmartBandListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'dashboard', component: DashboardAdminComponent },
  { path: 'contact', component: ContactComponent },

];
