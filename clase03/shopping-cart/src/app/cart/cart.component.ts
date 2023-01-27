import { Component } from '@angular/core';
import { ICart } from '../interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart: ICart[];

  ngOnInit(): void {
    //LLena carrito de compras de LocalStorage
    this.cart = JSON.parse( localStorage.getItem('cart') as string );   
  }

}
