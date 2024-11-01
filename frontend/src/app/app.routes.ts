import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ProductsPageComponent } from './pages/products/products.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirect root to products
  { path: 'products', component: ProductsPageComponent },
  // Add other routes as needed
];

export const appRoutingProviders = [provideRouter(appRoutes)];

