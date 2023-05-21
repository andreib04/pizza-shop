import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  products: Product[] = [];

  constructor(private productsService: ProductService, private router: Router) {
    
    productsService.getProductList().subscribe(res => {
      this.products = res;
    });
  }

  navigateToProduct(id: number) {
    this.router.navigate(['product', id]);
  }
}
