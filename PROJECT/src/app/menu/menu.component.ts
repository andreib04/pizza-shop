import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  products: Product[] = [];

  constructor(
     private route: ActivatedRoute,
     private productsService: ProductService,
     private router: Router,
     private cartService: CartService
     ) {
    
    productsService.getProductList().subscribe(res => {
      this.products = res;
    });
  }

  navigateToProduct(id: number) {
    this.router.navigate(['product', id]);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  
}
