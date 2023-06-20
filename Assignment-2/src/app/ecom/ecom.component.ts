import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.component.html',
  styleUrls: ['./ecom.component.css']
})
export class EcomComponent implements OnInit{
  
  

  constructor(private http: HttpClient){

  }
  

  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedPrice : number = 0;
  priceRangeList : number[]=[100,200,300];
  isGridView: boolean = true;
  
   ngOnInit(): void {
    this.http.get("../assets/items.json").subscribe(items => {
      this.products = items as Product[];
      this.filteredProducts = items as Product[];
    })
  }



  filterItemsViaPrice() {
    console.log("filter value ",this.selectedPrice)
    this.filteredProducts = this.selectedPrice == 0 ? this.products: this.products.filter(prod => prod.price <= this.selectedPrice);
  }
  

}
