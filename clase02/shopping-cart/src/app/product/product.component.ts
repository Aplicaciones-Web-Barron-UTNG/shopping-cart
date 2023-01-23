import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ICart } from '../interfaces/cart.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  @Input() product: IProduct;
  cart:ICart[];

  constructor() {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  ngOnInit(): void {
    console.log(this.product);    
  }

    add():void {
      localStorage.setItem('cart', JSON.stringify( this.product));
    }
}
