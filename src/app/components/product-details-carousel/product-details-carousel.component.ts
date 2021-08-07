import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-carousel',
  templateUrl: './product-details-carousel.component.html',
  styleUrls: ['./product-details-carousel.component.css']
})
export class ProductDetailsCarouselComponent implements OnInit {

  @Input('slides') slides: any;

  constructor() { }
  // slides = [
  //   {img: "../../../assets/images/category2.jpg"},
  //   {img: "../../../assets/images/home-bg.jpg"},
  //   {img: "../../../assets/images/category2.jpg"},
  //   {img: "../../../assets/images/home-bg.jpg"}
  // ];

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

  ngOnInit(): void {

    if(this.slides.length == 0)
      this.slides=[
        {
          imgPath:"assets/images/placeholder-image.png"
        }
      ]

  }

  onImgError($event)
  {
    $event.target.src = "assets/images/placeholder-image.png";
  }

}
