import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd, Event } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import * as AuthActions from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, CommonModule],
  template: `
    <app-header *ngIf="!isDashboard"></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer *ngIf="!isDashboard"></app-footer>
  `,
  styles: [`
  `]
})
export class AppComponent implements OnInit {
  isDashboard = false;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isDashboard = event.urlAfterRedirects.includes('/dashboard');
    });
  }

  ngOnInit(): void {
    // Check if user is already logged in
    this.store.dispatch(AuthActions.getCurrentUser());
  }
}
