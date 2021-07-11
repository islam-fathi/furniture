import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: any;
  image:any;
  constructor() { }

  ngOnInit(): void {
    if(this.product.images.lenght > 0)
      this.image = this.product.images[0]?.imgPath;
    else if(this.product.prodColorList.lenght > 0)
      this.image = this.product.prodColorList[0]?.colorImg;
    else
      this.image = "assets/images/placeholder-image.png";

  }

  onImgError($event)
  {
    $event.target.src = "assets/images/placeholder-image.png";
  }

}
