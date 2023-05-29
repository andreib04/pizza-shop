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
      imageUrl: "https://www.anna-delivery.ro/image/cache/catalog/PIZZA/quatro%20stagioni-web-550x550w.jpg",
      name: "Pizza Quattro Stagioni",
      description: "pomodoro, prosciuto cotto, ciuperci, porumb, măsline, ardei gras, mozzarella - 480g",
      price: 24,
      longDescription: "Făină de grâu dur - 170g, Mozzarella (Conține Lapte) - 100g, Sos de rosii - 60ml, Ciuperci champignons - 50g, SUNCA PRAGA CRIS TIM - 50g, (Pulpa de porc din UE, apa, carne de porc, amidon, sorici, agent de intarire (lactat de sodiu), sare, zaharuri (dextroza), proteina vegetala din SOIA, stabilizatori (trifosfati), fibre vegetale, proteina animala din porc, agent de ingrosare (caragenan), antioxidant (ascorbat de sodiu, extract bogat in tocoferol), potentiator de aroma (proteina vegetala hidrolizata), extract de drojdie, arome, conservant (nitrit de sodiu). Membrana artificiala necomestibila.), Măsline - 40g, Salam Chorizo - 40g, (carne de porc, slanina, pulpa de porc, sare, proteina vegetala din SOIA, condimente si extracte de condimente, zaharuri (mattodextrina, dextroza), antioxidant (acid ascorbic), stabilizatori (difosfati, trifosfati), potentiator de aroma (glutamat monosodic , arome, conservant (nitrit de sodiu), colorant (carmin)), Ulei din turte de masline - 10ml, (Ulei din turte de masline. Obtinut prin tratarea produsului obtinut in urma extractiei uleiului de masline si uleiuri obtinute direct din masline.), Zahăr - 5g, Sare - 5g, Drojdie - 1g, Apă - 0.90ml"
    } as Product,
    {
      id: 2,
      imageUrl: "assets/2.jpg",
      name: "Pizza Prosciutto",
      description: "pomodoro, prosciuto cotto, mozzarella - 420g",
      price: 24,
      longDescription: "Făină de grâu dur - 170g, Mozzarella (Conține Lapte) - 100g, Apă - 90ml, SUNCA PRAGA CRIS TIM - 70g, (Pulpa de porc din UE, apa, carne de porc, amidon, sorici, agent de intarire (lactat de sodiu), sare, zaharuri (dextroza), proteina vegetala din SOIA, stabilizatori (trifosfati), fibre vegetale, proteina animala din porc, agent de ingrosare (caragenan), antioxidant (ascorbat de sodiu, extract bogat in tocoferol), potentiator de aroma (proteina vegetala hidrolizata), extract de drojdie, arome, conservant (nitrit de sodiu). Membrana artificiala necomestibila.), Ciuperci champignons - 60g, Sos de rosii - 60ml, Ulei din turte de masline - 20ml, (Ulei din turte de masline. Obtinut prin tratarea produsului obtinut in urma extractiei uleiului de masline si uleiuri obtinute direct din masline.), Zahăr - 5g, Sare - 5g, Drojdie - 2g"
    } as Product,
    {
      id: 3,
      imageUrl: "assets/3.png",
      name: "Pizza Margherita",
      description: "pomodoro, mozzarella - 450g",
      price: 21,
      longDescription: "Făină de grâu dur - 170g, Mozzarella (Conține Lapte) - 120g, Sos de rosii - 60ml, Ulei din turte de masline - 20ml, (Ulei din turte de masline. Obtinut prin tratarea produsului obtinut in urma extractiei uleiului de masline si uleiuri obtinute direct din masline.), Zahăr - 5g, Sare - 5g, Drojdie - 1g, Apă - 0.90ml"
    } as Product,
    {
      id: 4,
      imageUrl: "https://capizza.ro/wp-content/uploads/2020/09/Mini-Studio-shooting-Pizza-Capizza-Mkt-131.jpg",
      name: "Pizza Salami",
      description: "pomodoro, salam, mozzarella - 420g",
      price: 24,
      longDescription: ""
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
