import { Routes } from '@angular/router';
import { SmartBandListComponent } from './components/smart-band-list/smart-band-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/smart-bands', pathMatch: 'full' },
  { path: 'smart-bands', component: SmartBandListComponent },
];
