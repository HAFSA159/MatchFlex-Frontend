import { Component } from "@angular/core"
import {Step1Component} from './step1/step1.component';
import {Step2Component} from './step2/step2.component';
import {Step3Component} from './step3/step3.component';
import {StepIndicatorComponent} from './step-indicator/step-indicator.component';

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
  imports: [
    Step1Component,
    Step2Component,
    Step3Component,
    StepIndicatorComponent
  ],
  standalone: true
})
export class OrderComponent {
  currentStep = 1

  updateStep(step: number) {
    console.log("Updating step to:", step)
    this.currentStep = step
  }
}

