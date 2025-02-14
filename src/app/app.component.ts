import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd, Event } from '@angular/router';
import { HeaderComponent } from './components/features/header/header.component';
import { FooterComponent } from './components/features/footer/footer.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

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
export class AppComponent {
  isDashboard = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isDashboard = event.urlAfterRedirects.includes('/dashboard');
    });
  }
}
