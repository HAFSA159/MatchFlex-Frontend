import { Component, Output, EventEmitter } from "@angular/core"
import {FormsModule} from '@angular/forms';

@Component({
  selector: "app-step3",
  templateUrl: "./step3.component.html",
  styleUrls: ["./step3.component.scss"],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class Step3Component {
  @Output() prevStep = new EventEmitter<void>()

  paymentData = {
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  }

  handleSubmit(): void {
    // Here you would typically process the payment
    console.log("Payment submitted:", this.paymentData)
    // Navigate to confirmation or success page
  }
}

