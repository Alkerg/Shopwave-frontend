import { Component, inject, signal } from '@angular/core';
import { CategoriesModal } from './categories-modal/categories-modal';
import { Category } from '../../interfaces/category.interface';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { LoginModal } from './login-modal/login-modal';
import { RegisterModal } from './register-modal/register-modal';

@Component({
  imports: [CategoriesModal, RouterLink, LoginModal, RegisterModal],
  selector: 'navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  private apiService = inject(ApiService);
  protected categoriesModalOpen = signal(false);
  protected categories = signal<Category[]>([]);
  protected authModal = signal<'login' | 'register' | null>(null);

  constructor(){
    this.apiService.getCategories().subscribe((categories) => {
      this.categories.set(categories);
    });
  }

  toggleCategoriesModal(){
    this.categoriesModalOpen.set(!this.categoriesModalOpen());
  }

  openAuthModal(modal: 'login' | 'register' = 'login'){
    this.authModal.set(modal);
  }

  closeAuthModal(){
    this.authModal.set(null);
  }
}
