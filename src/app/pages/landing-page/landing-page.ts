import { Component, inject, signal } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { ApiService } from '../../services/api.service';
import { Product } from '../../interfaces/products.interface';
import { ProductCard } from './components/product-card/product-card';
import { CarouselOffers } from './components/carousel-offers/carousel-offers';
import { ProductCardSkeleton } from '../../shared/product-card-skeleton/product-card-skeleton';
import { CarouselOffersSkeleton } from '../../shared/carousel-offers-skeleton/carousel-offers-skeleton';

@Component({
  imports: [Navbar, Footer, ProductCard, CarouselOffers, ProductCardSkeleton, CarouselOffersSkeleton],
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
})
export class LandingPage {

  private apiService = inject(ApiService);
  isLoadingProducts = signal<boolean>(false);
  skeletons = Array.from({length: 8});

  products = signal<Product[]>([]);

  constructor() {
    this.isLoadingProducts.set(true);



    this.apiService.getProducts().subscribe({
      next: (products) => this.products.set(products),
      error: (error) => console.log(error),
      complete: () => this.isLoadingProducts.set(false),
    });


  }

}
