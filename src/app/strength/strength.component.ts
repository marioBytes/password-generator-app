import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-strength',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './strength.component.html',
  styleUrl: './strength.component.css',
})
export class StrengthComponent {
  @Input() strength: any = 0;
  strengthString: string = '';

  getStrength(): number {
    return this.strength = Number.parseInt(this.strength, 10);
  }

  getStrengthAsString(): string {
    if (this.getStrength() === 0) {
      this.strengthString = ''
    } else if (this.getStrength() === 25) {
      this.strengthString = 'Too Weak!';
    } else if (this.getStrength() === 50) {
      this.strengthString = 'Weak';
    } else if (this.getStrength() === 75) {
      this.strengthString = 'Medium'
    } else {
      this.strengthString = 'Strong'
    }

    return this.strengthString;
  }

  getClassOf(): string {
    if (this.getStrength() === 25) {
      return 'bg-red';
    } else if (this.getStrength() === 50) {
      return 'bg-orange';
    } else if (this.getStrength() === 75) {
      return 'bg-yellow';
    }

    return 'bg-neon-green';
  }
}
