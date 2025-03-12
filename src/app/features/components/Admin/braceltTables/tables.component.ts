import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgClass, NgForOf, NgStyle } from '@angular/common';

interface Bracelet {
  id: number;
  name: string;
  email: string;
  avatar: string;
  serialNumber: string;
  package: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  employedDate: string;
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    SidebarComponent,
    NgStyle,
    NgForOf,
    NgClass
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent implements OnInit {
  bracelets: Bracelet[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeBracelets();
  }

  initializeBracelets(): void {
    this.bracelets = [
      {
        id: 1,
        name: 'John Michael',
        email: 'john@creative-tim.com',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        serialNumber: 'MSD-12345678',
        package: 'Premium',
        status: 'ACTIVE',
        employedDate: '23/02/25'
      },
      {
        id: 2,
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        serialNumber: 'SDF-3456789',
        package: 'Basic',
        status: 'INACTIVE',
        employedDate: '11/01/25'
      },
    ];
  }

  editBracelet(bracelet: Bracelet): void {
    console.log("Edit bracelet:", bracelet)
  }

  deleteBracelet(bracelet: Bracelet): void {
    console.log("Delete bracelet:", bracelet)
    if (confirm(`Are you sure you want to delete the bracelet for ${bracelet.name}?`)) {
      this.bracelets = this.bracelets.filter((b) => b.id !== bracelet.id)
    }
  }
}
