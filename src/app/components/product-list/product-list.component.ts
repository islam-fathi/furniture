import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  searchTerm: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public productService: ProductService,
              public authService: AuthService) {
    if (route.snapshot.data.products) {
      this.products = route.snapshot.data.products;
    }
  }

  ngOnInit(): void {

  }

  viewProductDetails(product: Product) {
    this.router.navigate(['/products', product.id]);
  }

  pushToCart(productId: number, quantity: number){
    if(this.authService.cartItem){
      this.productService.insertToCart(productId, this.authService.cartItem.id, quantity)
      .subscribe( resp=>{

      })
    }
  }

}
