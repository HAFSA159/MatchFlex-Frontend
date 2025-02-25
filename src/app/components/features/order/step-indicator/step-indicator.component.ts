import { Component, Input } from "@angular/core"
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: "app-step-indicator",
  templateUrl: "./step-indicator.component.html",
  styleUrls: ["./step-indicator.component.scss"],
  imports: [
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class StepIndicatorComponent {
  @Input() currentStep = 1

  steps = [
    { number: 1, title: "Choose Plan" },
    { number: 2, title: "Personal Info" },
    { number: 3, title: "Payment" },
  ]

  constructor(private router: Router) {}

  isCurrentStep(step: number): boolean {
    return this.currentStep === step
  }

  isCompleted(step: number): boolean {
    return this.currentStep > step
  }
}

