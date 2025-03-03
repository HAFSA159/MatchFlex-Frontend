import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgClass, NgForOf, NgStyle } from '@angular/common';

interface Bracelet {
  id: number;
  name: string;
  email: string;
  avatar: string;
  function: string;
  subFunction: string;
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
  authors: Bracelet[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeAuthors();
  }

  initializeAuthors(): void {
    this.authors = [
      {
        id: 1,
        name: 'John Michael',
        email: 'john@creative-tim.com',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        function: 'MSD-12345678',
        subFunction: 'Premium',
        status: 'ACTIVE',
        employedDate: '23/02/25'
      },
      {
        id: 2,
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        function: 'SDF-3456789',
        subFunction: 'Basic',
        status: 'INACTIVE',
        employedDate: '11/01/25'
      },
    ];
  }

  editAuthor(author: Bracelet): void {
    console.log('Edit author:', author);
  }
}
