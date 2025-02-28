import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-billing',
  standalone: true,
    imports: [
        SidebarComponent
    ],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {

}
