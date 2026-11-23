import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, DOCUMENT, inject, output, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'login-modal',
  templateUrl: './login-modal.html',
})
export class LoginModal {
  private document = inject(DOCUMENT);
  apiService = inject(ApiService);
  fb = inject(FormBuilder);
  closeModalOutput = output<void>();
  openRegisterOutput = output<void>();

  constructor() {
    this.document.body.classList.add('overflow-hidden');

    inject(DestroyRef).onDestroy(() => {
      this.document.body.classList.remove('overflow-hidden');
    });
  }


  loginForm: FormGroup = this.fb.group(
    {
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    }
  );

  closeModal() {
    this.closeModalOutput.emit();
  }

  openRegister() {
    this.openRegisterOutput.emit();
  }

  onSubmit(){
    console.log("SEND");
    this.loginForm.markAllAsTouched();

    console.log(this.loginForm.errors);
    console.log(this.loginForm.controls["email"].errors);
    console.log(this.loginForm.controls["password"].errors);
    console.log(this.loginForm.valid);
    console.log(this.loginForm.status);

    const userLoginData = {
      "username": this.loginForm.controls["email"].value,
      "password": this.loginForm.controls["password"].value  
    }

    this.apiService.login(userLoginData).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    })
  }
}
