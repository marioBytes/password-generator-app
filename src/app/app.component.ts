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

interface PasswordOptions {
  name: string;
  label: string;
  checked: boolean;
  disabled: boolean;
}

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

  charLength: number = 10;
  isValid: boolean = true;

  passwordOptions: PasswordOptions[] = [
    {
      name: 'includeUppercase',
      label: 'Include Uppercase Letters',
      checked: true,
      disabled: false,
    },
    {
      name: 'includeLowercase',
      label: 'Include Lowercase Letters',
      checked: true,
      disabled: false,
    },
    {
      name: 'includeNumbers',
      label: 'Include Numbers',
      checked: true,
      disabled: false,
    },
    {
      name: 'includeSymbols',
      label: 'Include Symbols',
      checked: false,
      disabled: false,
    },
  ];

  includeUpper: string = 'true';
  includeLower: string = 'true';
  includeNumbers: string = 'true';
  includeSymbols: string = 'false';

  strength: number = 50;

  generatePassword(): string {
    this.password = Array(this.charLength)
      .fill(
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
      )
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join('');

    return this.password;
  }

  getStrength(): number {
    let passwordStrength = 0;

    if (this.charLength > 0) {
      passwordStrength += 1;
    }

    if (this.charLength > 6) {
      passwordStrength += 1;
    }

    if (this.charLength > 9) {
      passwordStrength += 1;
    }

    if (this.charLength > 12) {
      passwordStrength += 1;
    }

    switch (passwordStrength) {
      case 0:
        this.strength = 0;
        break;

      case 1:
        this.strength = 25;
        break;

      case 2:
        this.strength = 50;
        break;

      case 3:
        this.strength = 75;
        break;

      case 4:
        this.strength = 100;
        break;
    }

    return this.strength;
  }

  copyToClipboard(): any {
    this.clipboard.copy(this.password);
  }

  sliderOnChange(value: any) {
    this.charLength = Number.parseInt(value);
    this.getStrength();
  }

  onCheck(value: any) {
    const { target } = value;
    const optionIndex = this.getPasswordOptionIndexByName(target.name)

    this.passwordOptions[optionIndex].checked =
      !this.passwordOptions[optionIndex].checked;

    this.disableOption();
    this.reenableOption();
  }

  private disableOption() {
    const checkedOptions = this.getPasswordOptionsByCheckedValue(true);

    if (checkedOptions.length === 1) {
      const disableOptionName = this.passwordOptions.find((option) => option.name === checkedOptions[0].name)!.name;
      const optionIndex = this.getPasswordOptionIndexByName(disableOptionName);

      this.passwordOptions[optionIndex].disabled = true;
    }
  }

  private reenableOption() {
    const disabledOptions = this.passwordOptions.find((option) => option.disabled === true);
    const moreThanOneOptionSelected = this.getPasswordOptionsByCheckedValue(true);

    if (disabledOptions && moreThanOneOptionSelected.length > 1) {
      const optionIndex = this.getPasswordOptionIndexByName(disabledOptions.name);
      this.passwordOptions[optionIndex].disabled = false;
    }
  }

  private getPasswordOptionsByCheckedValue(value: boolean): PasswordOptions[] {
    return this.passwordOptions.filter((option) => option.checked === value);
  }

  private getPasswordOptionIndexByName(value: string): number {
    return this.passwordOptions.findIndex((option) => option.name === value)
  }
}
