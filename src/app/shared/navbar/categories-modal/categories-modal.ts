import { Component, DestroyRef, DOCUMENT, inject, signal } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Category } from '../../../interfaces/category.interface';

@Component({
  imports: [],
  selector: 'categories-modal',
  templateUrl: './categories-modal.html',
})
export class CategoriesModal {
  private apiService = inject(ApiService);
  private document = inject(DOCUMENT);
  protected categories = signal<Category[]>([]);
  

  constructor(){
    this.document.body.classList.add('overflow-hidden');
    inject(DestroyRef).onDestroy(() => {
      this.document.body.classList.remove('overflow-hidden');
    });

    this.apiService.getCategories().subscribe((categories) => {
      this.categories.set(categories);
    });
  }

}
