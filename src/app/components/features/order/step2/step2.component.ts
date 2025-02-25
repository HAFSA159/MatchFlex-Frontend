import { Component, Output, EventEmitter } from "@angular/core"
import {FormsModule} from '@angular/forms';

@Component({
  selector: "app-step2",
  templateUrl: "./step2.component.html",
  styleUrls: ["./step2.component.scss"],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class Step2Component {
  @Output() nextStep = new EventEmitter<void>()
  @Output() prevStep = new EventEmitter<void>()

  formData = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
  }

  handleSubmit(): void {
    localStorage.setItem("customerInfo", JSON.stringify(this.formData))
    this.nextStep.emit()
  }
}

