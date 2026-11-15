import { Component, input } from '@angular/core';
import { Product } from '../../../../interfaces/products.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'product-card',
  templateUrl: './product-card.html',
  host: { class: 'block h-full' },
})
export class ProductCard {
  // input property to receive product data from parent component
  productData = input<Product>();

}
