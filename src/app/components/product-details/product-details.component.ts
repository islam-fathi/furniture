import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mainFunctions } from 'src/main';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  images:any[] = [];
  constructor(private productService:ProductService ,private cartService:CartService,private router:Router,private activatedroute: ActivatedRoute) { 

    const productid = this.activatedroute.snapshot.paramMap.get('id');
    this.productService.getProductsById({prodNo:productid}).subscribe(
      (result) =>{
        if(result.result.status == '200')
        {
          this.product = result.data.product;
          this.images = this.product.images;
          this.product.prodColorList.forEach(color => {

            this.images.push(
              {
                imgPath:color.colorImg
              }
            );
            
          });
        }
        else
          this.router.navigate(['/dashboard/materials']);
      });


  }

  ngOnInit(): void {
    
  }

  AddToCart(productID){

    let currentUser = mainFunctions.getCurretUser();
    let cart = {
      custNo: currentUser.custNo,
      prodNo: productID,
      quantity: 1
    }

    this.cartService.addCart(cart).subscribe(
      (result) =>{
        console.log(result);
      });

    
  }

}

