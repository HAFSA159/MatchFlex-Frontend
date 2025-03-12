import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import {routes} from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideStore(), provideEffects(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
}).catch(err => console.error(err));
