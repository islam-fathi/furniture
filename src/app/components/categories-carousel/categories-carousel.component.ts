import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-carousel',
  templateUrl: './categories-carousel.component.html',
  styleUrls: ['./categories-carousel.component.css']
})
export class CategoriesCarouselComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "../../../assets/images/category2.jpg"},
    {img: "../../../assets/images/home-bg.jpg"},
    {img: "../../../assets/images/category2.jpg"},
    {img: "../../../assets/images/home-bg.jpg"}
  ];

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
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
