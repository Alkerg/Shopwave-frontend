import { Component, signal } from '@angular/core';
import { CategoriesModal } from './categories-modal/categories-modal';

@Component({
  imports: [CategoriesModal],
  selector: 'navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected categoriesModalOpen = signal(false);

  toggleCategoriesModal(){
    this.categoriesModalOpen.set(!this.categoriesModalOpen());
  }
}
