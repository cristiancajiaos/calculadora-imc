import { Component, signal } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-calculator',
  imports: [MatCardModule, MatSliderModule, FormsModule, MatButtonModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {

  maxHeight = signal(250);
  minHeight = signal(100);
  defaultHeight = signal(170);

  maxWeight = signal(200);
  minWeight = signal(0);
  defaultWeight = signal(80);

  showTickMarks = signal(true);
}
