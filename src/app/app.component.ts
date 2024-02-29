import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { StrengthComponent } from './strength/strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CardComponent, StrengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  password: string = 'PTx1f5DaFX';

  charLength: number = 10;

  includeUpper: boolean = true;
  includeLower: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = false;

  strength: string = 'strong';
  strengthNum: number = 9;

  generatePassword(): string {
    this.generateNumber();

    if (this.strengthNum < 3) {
      this.strength = 'too weak!';
    } else if (this.strengthNum >= 3 && this.strengthNum <= 5) {
      this.strength = 'weak';
    } else if (this.strengthNum > 5 && this.strengthNum <= 8) {
      this.strength = 'medium';
    } else {
      this.strength = 'strong';
    }

    return this.strength;
  }

  getStrength(): string {
    return this.strength;
  }

  generateNumber(): number {
    this.strengthNum = Math.floor(Math.random() * (10 - 1) + 1);
    console.log(this.strengthNum);

    return this.strengthNum;
  }
}
