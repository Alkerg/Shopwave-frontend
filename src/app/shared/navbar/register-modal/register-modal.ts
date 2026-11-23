import { Component, DestroyRef, DOCUMENT, inject, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'register-modal',
  templateUrl: './register-modal.html',
})
export class RegisterModal {
  private document = inject(DOCUMENT);
  closeModalOutput = output<void>();
  openLoginOutput = output<void>();

  constructor() {
    this.document.body.classList.add('overflow-hidden');

    inject(DestroyRef).onDestroy(() => {
      this.document.body.classList.remove('overflow-hidden');
    });
  }

  closeModal() {
    this.closeModalOutput.emit();
  }

  openLogin() {
    this.openLoginOutput.emit();
  }
}
