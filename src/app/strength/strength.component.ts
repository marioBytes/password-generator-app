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
  @Input() strength: string = '';

  getClassOf(): string {
    if (this.strength === 'too weak!') {
      return 'bg-red';
    } else if (this.strength === 'weak') {
      return 'bg-orange';
    } else if (this.strength === 'medium') {
      return 'bg-yellow';
    }

    return 'bg-neon-green';
  }
}
