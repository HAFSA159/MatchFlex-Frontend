import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { routes } from './app.routes';
import { SmartBandListComponent } from './components/smart-band-list/smart-band-list.component';
import { AppComponent } from './app.component'; // Composant autonome

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AppComponent // Importez le composant autonome ici
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrapping du composant autonome
})
export class AppModule {}
