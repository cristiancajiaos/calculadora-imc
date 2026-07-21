import { Component, signal, ViewChild } from '@angular/core';

import { MatSliderModule, MatSliderThumb } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-calculator',
  imports: [MatCardModule, MatSliderModule, FormsModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {

  /* Altura */
  @ViewChild(MatSliderThumb) sliderHeight!: MatSliderThumb;
  maxHeight = signal(250);
  minHeight = signal(100);
  defaultHeight = signal(170);
  inputHeight = this.defaultHeight();

  /* Peso */
  @ViewChild(MatSliderThumb) sliderWeight!: MatSliderThumb;
  maxWeight = signal(200);
  minWeight = signal(0);
  defaultWeight = signal(80);
  inputWeight = this.defaultWeight();

  /* Ambos */
  showTickMarks = signal(true);

  /* Para el cálculo */
  calculated = signal(false);

  public calculateIMC(): void {
    this.calculated.set(true);
  }

  public resetDefault(): void {
    this.inputHeight = 170;
    this.inputWeight = 80;
    this.calculated.set(false);
  }
}
