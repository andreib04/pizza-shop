import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items = this.cartService.getItems();
  
  clear() {
    this.cartService.clearCart();
    this.items = [];
  }

  constructor(private cartService: CartService) { }

  
}
