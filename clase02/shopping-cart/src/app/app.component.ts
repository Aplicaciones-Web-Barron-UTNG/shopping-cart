import { Component } from '@angular/core';

import {IProduct} from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';

  products: IProduct[]; //Una lista de productos


  constructor() {
    this.products = [
      {id:1, name:"Mascarilla 01", description: "Embellece tu cara 01", price:100, img:''},
      {id:2, name:"Mascarilla 02", description: "Embellece tu cara 02", price:101, img:''},
      {id:3, name:"Mascarilla 03", description: "Embellece tu cara 03", price:102, img:''},
      {id:4, name:"Mascarilla 04", description: "Embellece tu cara 04", price:103, img:''},
      {id:5, name:"Mascarilla 05", description: "Embellece tu cara 05", price:104, img:''},
      {id:6, name:"Mascarilla 06", description: "Embellece tu cara 06", price:105, img:''}
    ];
  }

  ngOnInit(): void {
    
  }
}
