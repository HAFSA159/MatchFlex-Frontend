import { Component, Output, EventEmitter } from "@angular/core"
import {NgForOf} from '@angular/common';

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.scss"],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class Step1Component {
  @Output() nextStep = new EventEmitter<void>()

  plans = [
    {
      name: "Basic",
      price: "$99.99",
      period: "/ Group",
      description: "Perfect for occasional match-goers",
      features: [
        "Single SmartBand included",
        "Access to 1 Group matches",
        "Standard entry access",
        "Basic match notifications",
      ],
    },
    {
      name: "Pro",
      price: "$450.00",
      period: "/ Pack",
      description: "For dedicated supporters",
      popular: true,
      features: [
        "SmartBands included",
        "Priority match access",
        "Fast-track entry lanes",
        "Real-time match updates",
        "Enter 1 Match per day",
        "Exclusive match packages",
        "In-stadium discounts",
      ],
    },
    {
      name: "Premium",
      price: "$899.99",
      period: "/ All Matches",
      description: "For the ultimate fan experience",
      features: [
        "2 SmartBands included",
        "VIP match access",
        "Premium entry lanes",
        "Premium seating options",
        "All The matches",
        "Exclusive event invites",
        "Priority booking window",
        "Dedicated support line",
      ],
    },
  ]

  handleSelectPlan(planName: string): void {
    console.log("Selected plan:", planName)
    localStorage.setItem("selectedPlan", planName)
    this.nextStep.emit()
  }
}

