import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      imageUrl: "https://i.pinimg.com/564x/71/5a/19/715a19ebf463969dd1163a51fb91895a.jpg",
      name: "Pizza Quatro-Stagioni",
      description: "pomodoro, prosciuto cotto, ciuperci, porumb, măsline, ardei gras, mozzarella - 480g",
      price: 24
    } as Product,
    {
      id: 2,
      imageUrl: "",
      name: "Pizza Prosciuto",
      description: "pomodoro, prosciuto cotto, mozzarella - 420g",
      price: 24
    } as Product,
    {
      id: 3,
      imageUrl: "",
      name: "Pizza",
      description: "abc",
      price: 5
    } as Product,
    {
      id: 4,
      imageUrl: "",
      name: "Pizza",
      description: "abc",
      price: 5
    } as Product,
    {
      id: 5,
      imageUrl: "",
      name: "Pizza",
      description: "abc",
      price: 5
    } as Product,
    
  ];

  constructor() { }

  getProductList(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product> {
    return of(this.products.find(product => product.id == id) || this.products[0]);
  }
}
