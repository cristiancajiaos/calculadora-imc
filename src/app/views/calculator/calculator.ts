import { Component, computed, Signal, signal, ViewChild, WritableSignal } from '@angular/core';

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
  maxHeight: WritableSignal<number> = signal(250);
  minHeight: WritableSignal<number> = signal(100);
  defaultHeight: WritableSignal<number> = signal(170);
  inputHeight: number = this.defaultHeight();

  /* Peso */
  @ViewChild(MatSliderThumb) sliderWeight!: MatSliderThumb;
  maxWeight: WritableSignal<number> = signal(200);
  minWeight: WritableSignal<number> = signal(0);
  defaultWeight: WritableSignal<number> = signal(80);
  inputWeight: number = this.defaultWeight();

  /* Ambos */
  showTickMarks: WritableSignal<boolean> = signal(true);

  /* Para el cálculo */
  calculated = signal(false);
  imc = signal(this.inputWeight / Math.pow((this.inputHeight / 100), 2));
  imcStr: Signal<string> = computed(() => this.imc().toFixed(2));

  public calculateIMC(): void {
    this.calculated.set(true);
    this.imc.set(this.inputWeight / Math.pow((this.inputHeight / 100), 2));
  }

  public resetDefault(): void {
    this.inputHeight = 170;
    this.inputWeight = 80;
    this.calculated.set(false);
  }
}
