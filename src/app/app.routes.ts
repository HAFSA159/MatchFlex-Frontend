import { Routes } from '@angular/router';
import { SmartBandListComponent } from './components/features/smart-band-list/smart-band-list.component';
import {HomeComponent} from './components/features/home/home.component';
import {LoginComponent} from './components/features/Auth/login/login.component';
import {RegisterComponent} from './components/features/Auth/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'smart-bands', component: SmartBandListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];
