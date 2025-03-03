import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-match',
  standalone: true,
    imports: [
        SidebarComponent
    ],
  templateUrl: './match.component.html',
  styleUrl: './match.component.scss'
})
export class MatchComponent {

}
