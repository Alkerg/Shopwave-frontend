import { Component, input, InputSignal, signal } from '@angular/core';
import { ICartItem } from '../../../../interfaces/cart.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'cart-item',
  templateUrl: './cart-item.html',
})
export class CartItem {
  itemData = input<ICartItem | null>(null);

  addOrRestCuantity(value: number){
    let newValue = this.itemData()!.cuantity + value;

    if (Number.isNaN(newValue) || newValue < 1) newValue = 1;
    if (newValue > 99) newValue = 99;

    this.itemData()!.cuantity = newValue;
    console.log(this.itemData())
  }


  setCuantityInput(event: Event){
    const input = event.target as HTMLInputElement;
    let value = Math.trunc(Number(input.value));

    if (Number.isNaN(value) || value < 1) value = 1;
    if (value > 99) value = 99;

    this.itemData()!.cuantity = value;
    console.log(this.itemData())
  }


}
