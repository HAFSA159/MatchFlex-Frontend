import { Routes } from '@angular/router';
import { SmartBandListComponent } from './components/smart-band-list/smart-band-list.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/Auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'smart-bands', component: SmartBandListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

];
