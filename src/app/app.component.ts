import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StrengthComponent } from './strength/strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StrengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-generator-app';
}
