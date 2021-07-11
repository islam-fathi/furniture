import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: any =[];
  p: number = 1;
  
  constructor(private productServise: ProductService) {
    
  }

  ngOnInit(): void {
    this.productServise.getProductList().subscribe(
      (result) =>{
        if(result.result.status == '200')
          this.products = result.data.productList;
      }
    );
  }
}
