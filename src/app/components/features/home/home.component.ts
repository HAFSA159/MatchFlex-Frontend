import { Component, type OnInit } from "@angular/core"


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }


  onLearnMoreClick(): void {
    console.log("Learn More clicked")
  }

  onSubmitForm(formData: any): void {
    console.log("Form submitted", formData)
  }
}

