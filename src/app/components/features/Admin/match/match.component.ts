import { Component, type OnInit } from "@angular/core"
import { SidebarComponent } from "../sidebar/sidebar.component"
import { NgClass, NgForOf, NgStyle } from "@angular/common"

interface Match {
  id: number
  name: string
  email: string
  avatar: string
  function: string
  subFunction: string
  status: "SCHEDULED" | "ONGOING" | "COMPLETED"
  employedDate: string
}

@Component({
  selector: "app-match",
  standalone: true,
  imports: [SidebarComponent, NgStyle, NgForOf, NgClass],
  templateUrl: "./match.component.html",
  styleUrls: ["./match.component.scss"],
})
export class MatchComponent implements OnInit {
  matches: Match[] = []

  constructor() {}

  ngOnInit(): void {
    this.initializeMatches()
  }

  initializeMatches(): void {
    this.matches = [
      {
        id: 1,
        name: "John Michael",
        email: "john@example.com",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        function: "MSD-12345678",
        subFunction: "Premium",
        status: "SCHEDULED",
        employedDate: "23/02/25",
      },
      {
        id: 2,
        name: "Alexa Liras",
        email: "alexa@example.com",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        function: "SDF-3456789",
        subFunction: "Basic",
        status: "COMPLETED",
        employedDate: "11/01/25",
      },
    ]
  }

  editMatch(match: Match): void {
    console.log("Edit match:", match)
  }

  deleteMatch(match: Match): void {
    console.log("Delete match:", match)
    if (confirm(`Are you sure you want to delete the match for ${match.name}?`)) {
      this.matches = this.matches.filter((m) => m.id !== match.id)
    }
  }
}

