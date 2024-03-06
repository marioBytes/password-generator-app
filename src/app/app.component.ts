import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { SliderComponent } from './slider/slider.component';
import { StrengthComponent } from './strength/strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    InputComponent,
    SliderComponent,
    StrengthComponent,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private clipboard: Clipboard) {}

  password: string = '';

  charLength: string = '10';

  passwordOptions = [
    { name: 'includeUppercase', label: 'Include Uppercase Letters', checked: true },
    { name: 'includeLowercase', label: 'Include Lowercase Letters', checked: true },
    { name: 'includeNumbers', label: 'Include Numbers', checked: true },
    { name: 'includeSymbols', label: 'Include Symbols', checked: false },
  ];

  includeUpper: string = 'true';
  includeLower: string = 'true';
  includeNumbers: string = 'true';
  includeSymbols: string = 'false';

  strength: string = 'strong';
  strengthNum: number = 9;


  generatePassword(): string {
    this.generateNumber();
    this.password = 'PTx1f5DaFX';
    console.log(Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join(''))

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

  copyToClipboard(): any {
    this.clipboard.copy(this.password);
  }

  sliderOnChange(value: string) {
    this.charLength = value;
  }

  onCheck(value: any) {
    const { target } = value;
    const optionIndex = this.passwordOptions.findIndex((option) => option.name === target.name);

    this.passwordOptions[optionIndex].checked = !this.passwordOptions[optionIndex].checked;
  }
}
