import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  imports: [Navbar, Footer],
  selector: 'app-profile-page',
  templateUrl: './profile-page.html',
})
export class ProfilePage {}
