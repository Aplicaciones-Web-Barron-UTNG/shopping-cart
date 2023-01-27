import { Component, Input } from '@angular/core';
import { IProduct, ICart } from '../interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct;
  cart: ICart[];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.product);
  }

  add(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') as string);

    //Validar si un producto ya existe
    let isFound = false;
    this.cart.forEach(item => {
      if (item.id === this.product.id) {
        isFound = true;
        item.quantity = item.quantity + 1; //Aumenta en 1
      }
    });

    if (!isFound) {
      this.cart.push({ id: this.product.id, name: this.product.name, price: this.product.price, quantity: 1 });
      
    }


    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
