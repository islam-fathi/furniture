import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winter-sale-carousel',
  templateUrl: './winter-sale-carousel.component.html',
  styleUrls: ['./winter-sale-carousel.component.css']
})
export class WinterSaleCarouselComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "../../../assets/images/PNG content/chair1.png"},
    {img: "../../../assets/images/PNG content/chair1.png"},
    {img: "../../../assets/images/PNG content/chair1.png"},
    {img: "../../../assets/images/PNG content/chair1.png"}
  ];

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  
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
  }

}
