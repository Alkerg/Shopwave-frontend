import { Component, inject, signal } from '@angular/core';
import { CategoriesModal } from './categories-modal/categories-modal';
import { Category } from '../../interfaces/category.interface';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CategoriesModal, RouterLink],
  selector: 'navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  private apiService = inject(ApiService);
  protected categoriesModalOpen = signal(false);
  protected categories = signal<Category[]>([]);
  
  constructor(){
    this.apiService.getCategories().subscribe((categories) => {
      this.categories.set(categories);
    });
  }

  toggleCategoriesModal(){
    this.categoriesModalOpen.set(!this.categoriesModalOpen());
  }
}
