import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>POS System</span>
      <span class="spacer"></span>
      <button mat-icon-button routerLink="/products">
        <mat-icon>inventory_2</mat-icon>
      </button>
      <button mat-icon-button routerLink="/orders">
        <mat-icon>shopping_cart</mat-icon>
      </button>
    </mat-toolbar>
    <main class="content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    .content {
      padding: 20px;
    }
  `]
})
export class AppComponent {}
