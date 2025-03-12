import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-groups',
  standalone: true,
  imports: [],
  templateUrl: './details-groups.component.html',
  styleUrl: './details-groups.component.scss'
})
export class DetailsGroupsComponent implements OnInit {
  groupName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.groupName = params.get('groupName') || '';
    });
  }
}
