import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Output() onChange = new EventEmitter<string>();

  sliderOnChange(value: string) {
    this.onChange.emit(value);
  }
}
