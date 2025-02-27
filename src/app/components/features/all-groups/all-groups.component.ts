import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Group {
  name: string;
  countries: string[];
  flags: string[];
}

@Component({
  selector: 'app-all-groups',
  styleUrls: ['./all-groups.component.scss'],
  templateUrl: './all-groups.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AllGroupsComponent {
  groups: Group[] = [
    {
      name: 'Group A',
      countries: ['Maroc', 'Mali', 'Comores', 'Zambie'],
      flags: ['maroc.jpg', 'mali.png', 'Comores.jpg', 'zambia.jpg']
    },
    {
      name: 'Group B',
      countries: ['Egypte', 'Angola', 'Zimbabwe', 'Afrique de Sud'],
      flags: ['maroc.jpg', 'mali.png', 'Comores.jpg', 'zambia.jpg'] // Replace with correct flags
    },
    {
      name: 'Group C',
      countries: ['Tunisie', 'Nigeria', 'Tanzanie', 'Ougande'],
      flags: ['maroc.jpg', 'mali.png', 'Comores.jpg', 'zambia.jpg'] // Replace with correct flags
    },
    {
      name: 'Group D',
      countries: ['Congo', 'Bénin', 'Botswana', 'Sénégal'],
      flags: ['maroc.jpg', 'mali.png', 'Comores.jpg', 'zambia.jpg'] // Replace with correct flags
    },
    {
      name: 'Group E',
      countries: ['Soudan', 'Burkina faso', 'Algérie', 'Guiné'],
      flags: ['maroc.jpg', 'mali.png', 'Comores.jpg', 'zambia.jpg'] // Replace with correct flags
    },
    {
      name: 'Group F',
      countries: ['Maroc', 'Mali', 'Comores', 'Zambie'],
      flags: ['maroc.jpg', 'mali.png', 'Comores.jpg', 'zambia.jpg']
    }
  ];

  viewDetails(group: string) {
    console.log(`Viewing details for ${group}`);
  }

  viewSchedule(group: string) {
    console.log(`Viewing schedule for ${group}`);
  }
}
