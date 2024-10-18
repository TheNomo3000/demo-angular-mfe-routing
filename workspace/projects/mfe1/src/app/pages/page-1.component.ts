import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-page1',
  styles: [
    `
      .card {
        max-width: 400px;
      }

      .header-image {
        background-image: url('https://img.freepik.com/psd-premium/imagen-cabra-marron-cara-marron-fondo-negro_68880-108998.jpg?semt=ais_hybrid');
        background-size: cover;
      }
    `,
  ],
  template: `
    <mat-card class="card" appearance="outlined">
      <mat-card-header>
        <div mat-card-avatar class="header-image"></div>
        <mat-card-title>Capibara</mat-card-title>
        <mat-card-subtitle>♥️</mat-card-subtitle>
      </mat-card-header>
      <img
        mat-card-image
        src="http://localhost:4201/capibara.jpeg"
        alt="Capibara"
      />
      <mat-card-content>
        <p style="margin-top: 35px">
          El capibara, también llamado carpincho o chigüire, es el roedor más
          grande del mundo, originario de Sudamérica. Herbívoro y semiacuático,
          vive cerca de cuerpos de agua y se alimenta de hierba y plantas
          acuáticas. Es un animal social que forma grupos de hasta 20 individuos
          y, aunque es tranquilo, tiene depredadores como jaguares y caimanes.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class Page1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
