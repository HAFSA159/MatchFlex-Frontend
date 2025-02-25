import { Routes } from '@angular/router';
import { SmartBandListComponent } from './components/features/smart-band-list/smart-band-list.component';
import {HomeComponent} from './components/features/home/home.component';
import {LoginComponent} from './components/features/Auth/login/login.component';
import {RegisterComponent} from './components/features/Auth/register/register.component';
import {AboutPageComponent} from './components/features/about-page/about-page.component';
import {DashboardAdminComponent} from './components/features/dashboard-admin/dashboard-admin.component';
import {ContactComponent} from './components/features/contact/contact.component';
import {ProfilComponent} from './components/features/profil/profil.component';
import {DetailsGroupsComponent} from './components/features/details-groups/details-groups.component';
import {OrderComponent} from './components/features/order/order.component';
import {Step1Component} from './components/features/order/step1/step1.component';
import {Step2Component} from './components/features/order/step2/step2.component';
import {Step3Component} from './components/features/order/step3/step3.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'smart-bands', component: SmartBandListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'dashboard', component: DashboardAdminComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'detailgroups', component: DetailsGroupsComponent },
  { path: "order", component: OrderComponent,
    children: [
      { path: "", redirectTo: "step1", pathMatch: "full" },
      { path: "step1", component: Step1Component },
      { path: "step2", component: Step2Component },
      { path: "step3", component: Step3Component },
    ],
  },
];
