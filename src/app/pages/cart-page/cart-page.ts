import { Component, signal } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { CartItem } from './components/cart-item/cart-item';
import { ICartItem } from '../../interfaces/cart.interface';

@Component({
  imports: [Navbar, CartItem],
  selector: 'app-cart-page',
  templateUrl: './cart-page.html',
})
export class CartPage {

  cartItems = signal<ICartItem[]>([
    {
      "id": 1,
      "name": "Producto 1",
      "imgUrl": "https://placehold.co/70x70?text=Product",
      "price": 999.99,
      "discountedPrice": 888.99,
      "cuantity": 1
    },
    {
      "id": 2,
      "name": "Producto 2",
      "imgUrl": "https://placehold.co/70x70?text=Product",
      "price": 999.99,
      "discountedPrice": 888.99,
      "cuantity": 1
    },
    {
      "id": 3,
      "name": "Producto 3",
      "imgUrl": "https://placehold.co/70x70?text=Product",
      "price": 999.99,
      "discountedPrice": 888.99,
      "cuantity": 1
    },
    {
      "id": 4,
      "name": "Producto 4",
      "imgUrl": "https://placehold.co/70x70?text=Product",
      "price": 999.99,
      "discountedPrice": 888.99,
      "cuantity": 1
    }
  ]);

  addCartItem(newItem: ICartItem){
    this.cartItems.update(prev => [...prev, newItem]);
  }

  showCartItems(){
    console.log(this.cartItems());
  }

}
