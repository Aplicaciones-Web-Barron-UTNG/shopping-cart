# Carrito de compra

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Crear una nueva aplicación con Angular
Para crear una aplicación Web con Angular ejecutar el siguiente comando en la consola de windows :computer:
```
ng new shopping-cart
```

- **Would you like to add Angular routing? (y/N)** :question:
- **SCSS** :question:

Esperar a que termine la configuración en la creación de la aplicación. Cambiar al directorio recien creado de la aplicación tecleando el siguiente comando :computer: 
```
cd shopping-cart
```

Levantar el  servidor
```
ng serve -o
```
---
Crear componente `header` `footer` `product`
```
ng g c components/header 
ng g c components/footer
ng g c components/product 
```

Modificar archivo `app.component.html` y eliminar todo el contenido, enseguida agregar el siguiente código :computer:
~~~
<app-header></app-header>
<div class="content">
  
</div>
<app-footer></app-footer>
~~~

Modificar el component `header.component.scss` :computer:
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

Modificar archivo `header.component.html`
Descargar icono de carrito en la siguiente URL https://icons8.com/icons/set/shopping-cart :page_with_curl:

~~~
<header>
    <span>My Store</span>
    <div class="cart">
        <img src="/assets/img/cart.png" alt="">
        <span class="cart">Mi Carrito</span>
    </div>
</header>
~~~

Crear una carpeta llamada `img` dentro de la carpeta `assets`
Agregar una imagen de carrito de compra llamada cart.png

Modificar nuevamente componente `header.component.html`
~~~
:host {
  display: block;
  background-color: rgb(10, 204, 204);
  color: rgb(37, 12, 145);
  border-radius: 10px;
  font-size: 0.85rem;
  height: 60px;
  text-align: left;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 10px;

  div.cart {
    float: right;
    margin-right: 5px;
  }

  .cart img {
    height: 30px;
    width: 30px;
  }

  .cart span {
    font-size: 0.8rem;
  }
}

~~~
![imagen](https://user-images.githubusercontent.com/8560750/218585166-71e5988c-e700-4389-ae05-bab20f0a8a53.png)
---


Modificar componente `footer.component.html`
~~~
<footer>
    Derechos reservados @2023
</footer>
~~~

Modificar componente `footer.component.scss` para dar estilo
~~~
:host {
  background-color: rgb(10, 204, 204);
  display: block;
  border-radius: 10px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  height: 40px;
  text-align: center;
}
~~~

Modificar componente `app.component.scss` para dar estilo al contenido
~~~
.content {
    display: block;
    min-height: calc(100vh - 160px);
    width: 64%;
    margin: 0 auto;
    padding-top: 60px;
    text-align: center;
    line-height: 5px;

    .product {
        display: inline-block
    }
}
~~~

Modificar archivo `app.component.html`
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
![imagen](https://user-images.githubusercontent.com/8560750/218586008-ad07832e-6b04-4a2e-9f59-59ba017dc08d.png)
---

Dibujar el producto de acuerdo a características mediante el componente `product.component.html`
~~~
<h1>Nombre</h1>
<p>Descripción</p>
<span>Precio</span>
<Button>Add</Button>
~~~
![imagen](https://user-images.githubusercontent.com/8560750/218587130-b6c9e39e-f045-45f8-b4e8-c4e5168af780.png)

Dar estilos `product.component.scss`
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
![imagen](https://user-images.githubusercontent.com/8560750/218587873-c1d51138-7094-4821-89a1-0947c7bb4be3.png)
---

Parece que se vea mejor modificar el archivo `app.component.html`, para que ocupen el espacio de manera horizontal
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
![imagen](https://user-images.githubusercontent.com/8560750/218588510-cf3d5c45-c649-40ec-a39d-ab808719aad7.png)
---

Vamos a agregarle datos 
Directivas estructurales 
https://medium.com/notasdeangular/directivas-en-angular-efb8a8cf78e0

Vamos usar la directiva `ngFor`

Vamos a modificar el componente `app.component.ts`
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

Modificar el archivo `app.component.html`
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
Crear un archivo dentro de la carpeta llamada `product.interface.ts`
~~~
export interface IProduct {
    id:number,
    name:string,
    description:string,
    price:number,
    img:string
  }
~~~


Importar la interface en el archivo `app.compoment.ts`
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
Modificar el componente `product.component.ts`
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

Modificar el archivo `app.component.html`
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
Modificar archivo `product.component.html`
~~~
<h1>{{product.name}}</h1>
<p>{{product.description}}</p>
<span>{{product.price | currency}}</span>
<Button>Add</Button>
~~~

Agregar la funcionalidad de botón Agregar
Agregar un evento click al componente `product.component.html`
<Button (click)="add()">Add</Button>

Agregar método en componente `product.component.html`
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

Crear un archivo index.ts en carpeta interfaces
~~~

export * from './cart.interface';
export * from './product.interface'
~~~

para invocar las interfaces
~~~

import {IProduct, ICart} from './interfaces';
~~~

Modificar componente product.component.ts
~~~
import { Component, Input } from '@angular/core';

import {IProduct, ICart} from '../interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  @Input() product: IProduct;
  cart:ICart[]; //Variable temporal para modificar elementos del carrito

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.product);    
  }

    add():void {
      this.cart = JSON.parse(localStorage.getItem('cart') as string);
      this.cart.push({name: this.product.name , price: this.product.price, quantity: 1});
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
}
~~~

Modificar componente app.component.ts
~~~
import { Component } from '@angular/core';

import {IProduct, ICart} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';

  products: IProduct[]; //Un arreglo de productos
  cart:ICart[] =[];  //Arreglo vacío de productos compra

  constructor() {
    //Al inicio el carrito es vacío
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  ngOnInit(): void {
    //Inicializa los productos
    this.products = [
      {id:1, name:"Mascarilla 01", description: "Embellece tu cara 01", price:100, img:''},
      {id:2, name:"Mascarilla 02", description: "Embellece tu cara 02", price:101, img:''},
      {id:3, name:"Mascarilla 03", description: "Embellece tu cara 03", price:102, img:''},
      {id:4, name:"Mascarilla 04", description: "Embellece tu cara 04", price:103, img:''},
      {id:5, name:"Mascarilla 05", description: "Embellece tu cara 05", price:104, img:''},
      {id:6, name:"Mascarilla 06", description: "Embellece tu cara 06", price:105, img:''}
    ];    
  }
}


Vamos a desplegar productos de Cart

Crear un nuevo componente
~~~
ng g c cart
~~~

Modificar cart.component.ts
~~~

~~~

Modificar cart.component.html
~~~
<p>Carrito de compras</p>
<div class="content">
    <div class="item" *ngFor="let item of cart">
        <span>Nombre  {{item.name}}</span>
        <span>Price  {{item.price}}</span>
        <span>Quantity  {{item.quantity}}</span>
    </div>
</div>
~~~

Invocar al carrito modificar app.component.html siempre y cuando se tenga una bandera llamada show  
~~~
<app-header></app-header>
<app-cart *ngIf="showCart"></app-cart>
<div class="content">
    <div class="product" *ngFor="let p of products">
        <app-product [product] = "p"></app-product></div>
    <div class="product">
</div>
<app-footer></app-footer>
~~~

Modificar app.component.ts para agregar esa variable llamada show, por default indicamos que no se muestre
~~~
import { Component } from '@angular/core';

import {IProduct, ICart} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';

  products: IProduct[]; //Una lista de productos
  cart: ICart[]=[];
  showCart:boolean;


  constructor() {
    this.showCart = false; //N muestra carrito default
    localStorage.setItem('cart', JSON.stringify( this.cart)); //Carrito Vacío al Inicio

  }

  ngOnInit(): void {
    this.products = [
      {id:1, name:"Mascarilla 01", description: "Embellece tu cara 01", price:100, img:''},
      {id:2, name:"Mascarilla 02", description: "Embellece tu cara 02", price:101, img:''},
      {id:3, name:"Mascarilla 03", description: "Embellece tu cara 03", price:102, img:''},
      {id:4, name:"Mascarilla 04", description: "Embellece tu cara 04", price:103, img:''},
      {id:5, name:"Mascarilla 05", description: "Embellece tu cara 05", price:104, img:''},
      {id:6, name:"Mascarilla 06", description: "Embellece tu cara 06", price:105, img:''}
    ];
    
  }
}

~~~  
El momento de mostrar el carrito es cuando alguien le haga clic al header, para ello programar el botón del header cuando alguien haga clic.

Modificar header.component.html
~~~
<header>
    <span>My Store</span>
    <div class="cart" (click)="showCart()">
        <img src="/assets/img/cart.png" alt="">
        <span class="cart">Mi Carrito</span>
    </div>
</header>
~~~  

Modificar header.component.ts
Necesitamos conocer como se comunica un componente hijo con un componente padre

~~~
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() show: EventEmitter<any> = new EventEmitter();

  showCart() {
    console.log('Me hiciste Click')
    this.show.emit();
  }
}
~~~

Modificar el componente padre app.componente.html
~~~
<app-header (show)="toogleCart()"></app-header>
<app-cart *ngIf="show"></app-cart>
<div class="content"> 
    <div class="product" *ngFor="let p of products">
        <app-product [product] = "p"></app-product></div>
    <div class="product">
</div>
<app-footer></app-footer>
~~~
  
Modificar app.component.ts vamos a ligar
~~~
import { Component } from '@angular/core';

import {IProduct, ICart} from './interfaces';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';

  products: IProduct[]; //Una lista de productos
  cart: ICart[]=[];
  show:boolean; //Indica si muestra carrito


  constructor() {
    this.show = false; //N muestra carrito default
    localStorage.setItem('cart', JSON.stringify( this.cart)); //Carrito Vacío al Inicio

  }

  ngOnInit(): void {
    this.products = [
      {id:1, name:"Mascarilla 01", description: "Embellece tu cara 01", price:100, img:''},
      {id:2, name:"Mascarilla 02", description: "Embellece tu cara 02", price:101, img:''},
      {id:3, name:"Mascarilla 03", description: "Embellece tu cara 03", price:102, img:''},
      {id:4, name:"Mascarilla 04", description: "Embellece tu cara 04", price:103, img:''},
      {id:5, name:"Mascarilla 05", description: "Embellece tu cara 05", price:104, img:''},
      {id:6, name:"Mascarilla 06", description: "Embellece tu cara 06", price:105, img:''}
    ];
    
  }

  toogleCart() {
    this.show = !this.show;
  }
}

~~~


Agregar productos al carrito
