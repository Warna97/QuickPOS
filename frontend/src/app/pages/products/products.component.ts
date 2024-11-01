import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-management/product-list/product-list.component';
import { ProductDetailComponent } from '../../components/product-management/product-detail/product-detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [ProductListComponent, ProductDetailComponent],
})
export class ProductsPageComponent {}
