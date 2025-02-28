import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import {AllGroupsComponent} from './components/features/all-groups/all-groups.component';
import {DetailsGroupsComponent} from './components/features/details-groups/details-groups.component';
import {TrackOrderComponent} from './components/features/track-order/track-order.component';
import {DashboardComponent} from './components/features/Admin/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AllGroupsComponent,
    DetailsGroupsComponent,
    TrackOrderComponent,
    DashboardComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

