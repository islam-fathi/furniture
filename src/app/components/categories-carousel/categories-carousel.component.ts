import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categories-carousel',
  templateUrl: './categories-carousel.component.html',
  styleUrls: ['./categories-carousel.component.css']
})
export class CategoriesCarouselComponent implements OnInit {

  categories: any =[];

  constructor(private categoryServise:CategoryService, private router:Router) { }

  // slides = [
  //   {img: "../../../assets/images/category2.jpg"},
  //   {img: "../../../assets/images/home-bg.jpg"},
  //   {img: "../../../assets/images/category2.jpg"},
  //   {img: "../../../assets/images/home-bg.jpg"}
  // ];

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};

  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  removeSlide() {
    this.categories.length = this.categories.length - 1;
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
    this.categoryServise.getCategories().subscribe(
      (result) =>{
        if(result.result.status == '200')
          this.categories = result.data.categoryList;
      }
    );
  }

  onImgError($event)
  {
    $event.target.src = "http://placehold.it/350x150/777777";
  }

  deatilsCategory(categoryNo)
  {
    this.router.navigate(['/categories/'+categoryNo]);
  }

}
