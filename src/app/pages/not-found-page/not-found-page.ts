import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Navbar, Footer, RouterLink],
  selector: 'not-found-page',
  templateUrl: './not-found-page.html',
})
export class NotFoundPage {

}
