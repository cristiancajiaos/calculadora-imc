import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  imports: [MatDividerModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {

  public currentYear: number = 0;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();

  }
}
