import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength.component.html',
  styleUrl: './strength.component.css',
})
export class StrengthComponent {
  strength: number = 0;
  strengthString: string = '';

  passwordStrength(): string {
    this.generateNumber();

    if (this.strength < 3) {
      this.strengthString = 'too weak!';
    } else if (this.strength >= 3 && this.strength <= 5) {
      this.strengthString = 'weak';
    } else if (this.strength > 5 && this.strength <= 8) {
      this.strengthString = 'medium';
    } else {
      this.strengthString = 'strong';
    }

    return this.strengthString;
  }

  generateNumber(): number {
    this.strength = Math.floor(Math.random() * (10 - 1) + 1);

    return this.strength;
  }

  getStrength(): string {
    return this.strengthString;
  }

  getClassOf(): string {
    if (this.strengthString === 'too weak!') {
      return 'bg-red';
    } else if (this.strengthString === 'weak') {
      return 'bg-orange';
    } else if (this.strengthString === 'medium') {
      return 'bg-yellow';
    } else if (this.strengthString === 'strong') {
      return 'bg-neon-green';
    }

    return '';
  }
}
