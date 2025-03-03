import { Routes } from '@angular/router';
import { SmartBandListComponent } from './components/features/smart-band-list/smart-band-list.component';
import {HomeComponent} from './components/features/home/home.component';
import {LoginComponent} from './components/features/Auth/login/login.component';
import {RegisterComponent} from './components/features/Auth/register/register.component';
import {AboutPageComponent} from './components/features/about-page/about-page.component';
import {ContactComponent} from './components/features/contact/contact.component';
import {ProfilComponent} from './components/features/profil/profil.component';
import {DetailsGroupsComponent} from './components/features/details-groups/details-groups.component';
import {AllGroupsComponent} from './components/features/all-groups/all-groups.component';
import {ColorBandChoiceComponent} from './components/features/order/color-band-choice/color-band-choice.component';
import {UserInfoComponent} from './components/features/order/user-info/user-info.component';
import {PaymentComponent} from './components/features/order/payment/payment.component';
import {ConfirmationComponent} from './components/features/order/confirmation/confirmation.component';
import {TrackOrderComponent} from './components/features/track-order/track-order.component';
import {DashboardComponent} from './components/features/Admin/dashboard/dashboard.component';
import {TablesComponent} from './components/features/Admin/braceltTables/tables.component';
import {UserComponent} from './components/features/Admin/user/user.component';
import {ProfileComponent} from './components/features/Admin/profile/profile.component';
import {MatchComponent} from './components/features/Admin/match/match.component';

export const routes: Routes = [
  /* Page*/
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'smart-bands', component: SmartBandListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'details-groups/:groupName', component: DetailsGroupsComponent },
  { path: 'all-groups', component: AllGroupsComponent },

  /* Validation Steps */
  { path: 'color-band-choice/:groupName', component: ColorBandChoiceComponent },
  { path: "user-info", component: UserInfoComponent },
  { path: "payment", component: PaymentComponent},
  { path: "confirmation", component: ConfirmationComponent},
  { path: "track-order/:id", component: TrackOrderComponent},

  /* Dashboard */
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard-tables', component: TablesComponent },
  { path: 'dashboard-user', component: UserComponent },
  { path: 'dashboard-profil', component: ProfileComponent },
  { path: 'dashboard-matchs', component: MatchComponent },

  /* Auth */
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
