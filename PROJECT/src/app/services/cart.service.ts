import { Injectable } from '@angular/core';
import { Product } from '../product';
import { MenuComponent } from '../menu/menu.component';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  addToCart(product: Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
  }

  constructor() { }
}
