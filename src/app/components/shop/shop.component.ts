import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: any =[];
  pageCurrent: number = 1;

  config = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: this.pageCurrent,
    totalItems: this.products.lenght
  };
  
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

  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }

}
