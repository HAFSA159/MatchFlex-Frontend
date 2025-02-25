import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navItems = [
    { label: 'Home', link: '/', active: true },
    { label: 'Login', link: '/login' },
    { label: 'About', link: '/about' },
    { label: 'Contacts', link: '/contact' },
    { label: 'Dashboard', link: '/dashboard' },
  ];
}
