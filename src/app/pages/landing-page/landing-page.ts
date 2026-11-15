import { Component, inject, signal } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { ApiService } from '../../services/api.service';
import { Product } from '../../interfaces/products.interface';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from './components/product-card/product-card';

@Component({
  imports: [Navbar, Footer, ProductCard],
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
})
export class LandingPage {

  private apiService = inject(ApiService);

  products = signal<Product[]>([]);

  constructor() {
    this.apiService.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }

}
