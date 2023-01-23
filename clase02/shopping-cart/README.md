# ShoppingCart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Further help

Crear una nueva aplicación 
ng new shopping-cart

Cambiarse al directorio
cd shopping-cart

Ejecutar servidor
ng serve --o

Crear carpeta llamada components

Crear componente header y footer
ng g c header --skipTests=true
ng g c footer --skipTests=true
ng g c product 

Modificar archivo app.component.html eliminar contenido

Mark TechSon
https://www.youtube.com/watch?v=qmIMMutmuX0

~~~
<app-header></app-header>
<div class="content">
  
</div>
<app-footer></app-footer>
~~~

Modificar el component footer.component.scss y header.component.scss
~~~
:host {
    display: block;
    background-color: rgb(20, 131, 228);
    font-size: 0.85rem;
    height: 40px;
    text-align: left;
    padding: 10px;
    color: white;
}
~~~

Modificar archivo header.component.html
Descargar icon de carrito https://icons8.com/icons/set/shopping-cart

~~~
<header>
    <span>My Store</span>
    <img src="/assets/img/cart.png" alt="">
    <span class="cart">Mi Carrito</span>
</header>
~~~

Agregar estilos a header.component.css
~~~
<header>
    <span>My Store</span>
    <div class="cart">
        <img src="/assets/img/cart.png" alt="">
        <span class="cart">Mi Carrito</span>
    </div>
</header>
~~~

Modificar componente footer.component.html
~~~
<footer>
    Derechos reservados @2023
</footer>
~~~

Modificar componente footer.component.scss
~~~
.content {
    display: block;
    min-height: calc(100vh - 160px);
    width: 64%;
    margin: 0 auto;
    padding-top: 60px;
    text-align: center;

    .product {
        display: inline-block
    }
}
~~~

Modificar archivo app.component.html
~~~
<app-header></app-header>
<div class="content">
    <app-product></app-product>
    <app-product></app-product>
    <app-product></app-product>
    <app-product></app-product>
    <app-product></app-product>
    <app-product></app-product>
</div>
<app-footer></app-footer>
~~~

Dar estilos product.component.html
~~~
<h1>Nombre</h1>
<p>Descripción</p>
<span>Precio</span>
<Button>Add</Button>

~~~
Dar estilos product.component.scss
~~~
:host {
    display: block;
    height: 120px;
    width: 250px;
    border: 1px solid black;
    border-radius: 15px;
    box-shadow: 4px 4px black;
    margin: 10px;
    padding: 10px;

    h1 {
        font-size: 1.25rem;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    p {
        font-size: 0.95rem;
        margin-bottom: 5px;
    }

    span {
        font-size: 1rem;
        font-weight: bold;
    }

    button {
        margin-left: 20px;
        padding: 5px 10px;
        background-color: rgb(144, 10, 185);
        font-weight: bold;
        border-radius: 10px;
        color: white;
    }
}
~~~

Parece que se vea mejor modificar el archivo app.component.html, para que ocupen el espacio de manera horizontal
~~~
<app-header></app-header>
<div class="content">
    <div class="product"><app-product></app-product></div>
    <div class="product"><app-product></app-product></div>
    <div class="product"><app-product></app-product></div>
    <div class="product"><app-product></app-product></div>
    <div class="product"><app-product></app-product></div>
    <div class="product"><app-product></app-product></div>
</div>
<app-footer></app-footer>
~~~

Vamos a agregarle datos 
Directivas estructurales
https://medium.com/notasdeangular/directivas-en-angular-efb8a8cf78e0

Vamos usar ngFor


Vamos a modificar el componente app.component.ts
~~~
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';

  products: string[]; //Una lista de productos


  constructor() {
    this.products = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"];
  }

  ngOnInit(): void {
    
  }
~~~

Modificar el archivo app.component.html
~~~
<app-header></app-header>
<div class="content">
    <div class="product" *ngFor="let p of products">
        <app-product></app-product></div>
    <div class="product"><app-product></app-product></div>
</div>
<app-footer></app-footer>
~~~

Agregar datos en el array para los datos de producto
crear una carpeta llamada interfaces
Crear un archivo dentro de la carpeta llamada product.interface.ts
~~~
export interface IProduct {
    id:number,
    name:string,
    description:string,
    price:number,
    img:string
  }
~~~


Importar la interface en el archivo app.compoment.ts
~~~
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

~~~

Hacer que el producto llegue app-product
Modificar el componente product.component.ts
~~~
import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  @Input() product?: IProduct;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.product);    
  }
}
~~~

Modificar el archivo app.component.html
~~~
<app-header></app-header>
<div class="content">
    <div class="product" *ngFor="let p of products">
        <app-product [product] = "p"></app-product></div>
    <div class="product"><app-product></app-product></div>
</div>
<app-footer></app-footer>
~~~
Obervar la consola del navegador
Deshabilitar en archivo ts.config.json
~~~
"compilerOptions": {
    "strictPropertyInitialization": false,
    ...
}
~~~


Vamos a printear los datos del objeto product
Modificar archivo product.component.html
~~~
<h1>{{product.name}}</h1>
<p>{{product.description}}</p>
<span>{{product.price | currency}}</span>
<Button>Add</Button>
~~~

Agregar la funcionalidad de botón Agregar
Agregar un evento click al componente product.component.html
<Button (click)="add()">Add</Button>

Agregar método en componente product.component.html
~~~

    add():void {
      localStorage.setItem('cart', JSON.stringify( this.product));
    }
~~~

Ver application|localstorage

Vamos a definir un arreglo de objetos para el carrito
Definir una interface ICart
~~~
export interface ICart {
    name: string,
    price: number,
    quantity: number
}
~~~
Modificar componente product.component.ts
~~~
export class ProductComponent{
  @Input() product: IProduct;
  cart:ICart[];
~~~

