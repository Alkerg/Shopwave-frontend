import { Component, DestroyRef, DOCUMENT, HostListener, inject, input, output } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Category } from '../../../interfaces/category.interface';

@Component({
  imports: [],
  selector: 'categories-modal',
  templateUrl: './categories-modal.html',
})
export class CategoriesModal {
  private document = inject(DOCUMENT);
  closeModalOutput = output<boolean>();
  categories = input<Category[]>([]);
  

  constructor(){
    this.document.body.classList.add('overflow-hidden');

    inject(DestroyRef).onDestroy(() => {
      this.document.body.classList.remove('overflow-hidden');
    });
  }

  closeModal(){
    this.closeModalOutput.emit(true);
  }

}
