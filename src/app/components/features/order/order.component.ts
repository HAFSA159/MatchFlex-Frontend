import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ColorOption {
  name: string;
  class: string;
  ringClass: string;
}

@Component({
  templateUrl: './order.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class OrderComponent {
  selectedColor: string | null = null;

  colorOptions: ColorOption[] = [
    { name: 'Red', class: 'bg-red-500', ringClass: 'ring-red-300' },
    { name: 'Blue', class: 'bg-blue-500', ringClass: 'ring-blue-300' },
    { name: 'Green', class: 'bg-green-500', ringClass: 'ring-green-300' },
    { name: 'Yellow', class: 'bg-yellow-500', ringClass: 'ring-yellow-300' },
    { name: 'Purple', class: 'bg-purple-500', ringClass: 'ring-purple-300' },
  ];

  constructor(private router: Router) {}

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  goToNextStep(): void {
    if (this.selectedColor) {
      localStorage.setItem('selectedColor', this.selectedColor);
      this.router.navigate(['/step1']);
    } else {
      alert('Please select a color before proceeding.');
    }
  }

  goToPreviousStep(): void {
    console.log('This is the first step');
  }
}
