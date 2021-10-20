import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categories-carousel',
  templateUrl: './categories-carousel.component.html',
  styleUrls: ['./categories-carousel.component.css'],
})
export class CategoriesCarouselComponent implements OnInit {
  categories: any = [];

  constructor(
    private categoryServise: CategoryService,
    private router: Router
  ) {}

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
    this.categoryServise.getCategories().subscribe((result) => {
      if (result.result.status == '200')
        this.categories = result.data.categoryList;
    });
  }

  onImgError($event) {
    $event.target.src = 'assets/images/placeholder-image.png';
  }

  deatilsCategory(categoryNo) {
    this.router.navigate(['/categories/' + categoryNo]);
  }
}
