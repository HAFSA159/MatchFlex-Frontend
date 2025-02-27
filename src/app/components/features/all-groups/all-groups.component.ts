import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface Group {
  name: string;
  countries: string[];
  flags: string[];
}

@Component({
  selector: 'app-all-groups',
  templateUrl: './all-groups.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AllGroupsComponent implements OnInit {
  groups: Group[] = [
    {
      name: 'Group A',
      countries: ['Maroc', 'Mali', 'Comores', 'Zambie'],
      flags: ['maroc.jpg', 'mali.png', 'Comores.jpg', 'zambia.jpg']
    },

  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  viewDetails(groupName: string) {
    this.router.navigate(['/details-groups', groupName]);
  }

  schedule(groupName: string) {
    this.router.navigate(['/color-band-choice', groupName]);
  }
}
