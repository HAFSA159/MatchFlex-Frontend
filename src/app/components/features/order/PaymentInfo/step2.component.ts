import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class Step2Component implements OnInit {
  paymentForm!: FormGroup;
  currentStep = 3; // Payment is step 3

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.paymentForm = this.fb.group({
      cardHolder: ['', [Validators.required]],
      cardNumber: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{16}$')
      ]],
      expiryDate: ['', [
        Validators.required,
        Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{2})$')
      ]],
      cvv: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{3,4}$')
      ]]
    });
  }

  formatCardNumber(event: any): void {
    let input = event.target;
    let value = input.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = '';

    for(let i = 0; i < value.length; i++) {
      if(i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }

    input.value = formattedValue;
  }

  formatExpiryDate(event: any): void {
    let input = event.target;
    let value = input.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    if(value.length >= 2) {
      input.value = value.slice(0,2) + '/' + value.slice(2,4);
    } else {
      input.value = value;
    }
  }

  goToPreviousStep(): void {
    this.router.navigate(['/step1']);
  }

  onSubmit($event: any): void {
    if (this.paymentForm.valid) {
      this.saveFormData();
      this.router.navigate(['/step3']); // Assuming there's a confirmation step
    } else {
      this.markFormGroupTouched(this.paymentForm);
    }
  }

  saveFormData(): void {
    const formData = this.paymentForm.value;
    localStorage.setItem('paymentFormData', JSON.stringify(formData));
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.paymentForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  getErrorMessage(fieldName: string): string {
    const field = this.paymentForm.get(fieldName);

    if (!field) return '';

    if (field.hasError('required')) {
      return 'This field is required';
    }

    if (field.hasError('pattern')) {
      switch(fieldName) {
        case 'cardNumber':
          return 'Please enter a valid 16-digit card number';
        case 'expiryDate':
          return 'Please enter a valid expiry date (MM/YY)';
        case 'cvv':
          return 'Please enter a valid CVV';
        default:
          return 'Invalid input';
      }
    }

    return '';
  }
}
