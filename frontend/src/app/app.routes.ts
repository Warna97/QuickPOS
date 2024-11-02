import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.routes')
      .then(m => m.AUTH_ROUTES)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.routes')
      .then(m => m.PRODUCT_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.routes')
      .then(m => m.ORDER_ROUTES),
    canActivate: [authGuard]
  }
];