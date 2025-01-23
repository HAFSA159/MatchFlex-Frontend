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
    { label: 'Services', link: '/services' },
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Skills', link: '/skills' },
    { label: 'Contacts', link: '/contacts' },
    { label: 'Pages', link: '/pages', hasDropdown: true }
  ];

  socialLinks = [
    { icon: 'twitter', link: '#' },
    { icon: 'facebook-f', link: '#' },
    { icon: 'linkedin-in', link: '#' },
    { icon: 'instagram', link: '#' }
  ];
}
