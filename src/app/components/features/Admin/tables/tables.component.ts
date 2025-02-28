import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NgClass, NgForOf, NgStyle} from '@angular/common';


interface Author {
  id: number;
  name: string;
  email: string;
  avatar: string;
  function: string;
  subFunction: string;
  status: 'ONLINE' | 'OFFLINE';
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
export class TablesComponent implements OnInit{
  authors: Author[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize with sample data
    this.authors = [
      {
        id: 1,
        name: 'John Michael',
        email: 'john@creative-tim.com',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        function: 'Manager',
        subFunction: 'Organization',
        status: 'ONLINE',
        employedDate: '23/04/18'
      },
      {
        id: 2,
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        function: 'Programator',
        subFunction: 'Developer',
        status: 'OFFLINE',
        employedDate: '11/01/19'
      },
      {
        id: 3,
        name: 'Laurent Perrier',
        email: 'laurent@creative-tim.com',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        function: 'Executive',
        subFunction: 'Projects',
        status: 'ONLINE',
        employedDate: '19/09/17'
      },
      {
        id: 4,
        name: 'Michael Levi',
        email: 'michael@creative-tim.com',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        function: 'Programator',
        subFunction: 'Developer',
        status: 'ONLINE',
        employedDate: '24/12/08'
      },
      {
        id: 5,
        name: 'Richard Gran',
        email: 'richard@creative-tim.com',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        function: 'Manager',
        subFunction: 'Executive',
        status: 'OFFLINE',
        employedDate: '04/10/21'
      },
      {
        id: 6,
        name: 'Miriam Eric',
        email: 'miriam@creative-tim.com',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
        function: 'Programator',
        subFunction: 'Developer',
        status: 'OFFLINE',
        employedDate: '14/09/20'
      }
    ];
  }

  editAuthor(author: Author): void {
    console.log('Edit author:', author);
  }
}
