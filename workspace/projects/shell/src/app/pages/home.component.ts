import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [MatCardModule],
  selector: 'home',
  styles: [
    `
      img {
        max-width: 100%;
      }
    `,
  ],
  template: `
    <mat-card appearance="outlined">
      <mat-card-content>
        <img src="demo.png" alt="" srcset="" />
      </mat-card-content>
    </mat-card>
  `,
})
export class HomeComponent {}
