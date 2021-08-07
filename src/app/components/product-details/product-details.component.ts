import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  images:any[] = [];
  constructor(private productService:ProductService ,private router:Router,private activatedroute: ActivatedRoute) { 

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

}

