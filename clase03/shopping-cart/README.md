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

Hasta ésta lección se pueden agregar productos al carrito de compras a través del localStorage
Vamos a dar una mejor presentación al carrito de compras

Modificar el archivo cart.component.scss para darle mejor presentación al despliegue de productos
~~~
:host {
    display: block;

    span {
        display: inline-block;
        width: 250px;
    }
}
~~~


Modificar el archivo app.component.html para igualmente posicionarlo y darle mejor estilo
~~~
<app-header (show)="toogleCart()"></app-header>
<div class="cart" *ngIf="show">
    <app-cart ></app-cart>
</div>
<div class="content"> 
    <div class="product" *ngFor="let p of products">
        <app-product [product] = "p"></app-product></div>
    <div class="product">
</div>
<app-footer></app-footer>

~~~

Modificar el archivo app.componente .scss
~~~
:host {
    display: block;
    position: relative;
}
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

.cart {
    left: 600px;
    background-color: rgb(211, 211, 241);
    color: white;
    position: absolute;
    padding-left: 20px;
    z-index: 100;
}
~~~

Práctica el estilo 
Agregar al carrito el cursor puntero en el carrito de compra, al botón de agregar el producto
~~~
cursor:pointer;
~~~

Vamos enumerar los puntos a mejorar para el carrito de compras
- Que no se eliminen los productos cuando se refresque la página
- Que no se agrega otro producto cuando no existe algo
- Tema de estilos en la página

Revisemos que para el componente cart.component.ts se hace el manejo del arreglo cart, que es posicionando en el componente app.component.html y definido de manera global en componente app.component.ts
Pero se llenaba en el componente product.componente.html

~~~
export class CartComponent {

  cart: ICart[];

  ngOnInit(): void {
    //LLena carrito de compras de LocalStorage
    this.cart = JSON.parse( localStorage.getItem('cart') as string );   
  }

}
~~~

El component product.component.ts haces manejo de agregar productos al carrito de compras
~~~
export class ProductComponent{
  @Input() product: IProduct;
  cart:ICart[];

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

Validar que un producto ya existe
Hagamos modificaciones a la interfaz ICart agregando el ID
~~~
export interface ICart {
    id:number,
    name: string,
    price: number,
    quantity: number
}
~~~

Modificar el agregado del producto product.component.ts  agregando el id
~~~
    add():void {
      this.cart = JSON.parse(localStorage.getItem('cart') as string);
      this.cart.push({id: this.product.id, name: this.product.name , price: this.product.price, quantity: 1});
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
~~~

Vamos a modificar componente product.component.ts para que agregue cantidades
~~~
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
~~~


Al inicio está eliminando los productos
Modificar el componente app.component.ts como proppiedad y en el consructor
~~~
export class AppComponent {
  title = 'shopping-cart'; 

  products: IProduct[]; //Una lista de productos
  cart: ICart[];
  show:boolean; //Indica si muestra carrito


  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart') as string);

    if (!this.cart) {
      localStorage.setItem('cart', JSON.stringify( [])); //Carrito Vacío al Inicio
    }
    this.show = false; //N muestra carrito default

  }
~~~
