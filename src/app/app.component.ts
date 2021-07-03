import { Component, OnInit } from '@angular/core';
import { Category } from './models/category';
import { AuthService } from './services/auth/auth.service';
import { CategoryService } from './services/category/category.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  
  title = 'Lamaderas';

  categories: any[];
  constructor(public authService: AuthService, private categoryService: CategoryService) {
    // authService.prepareUserData();
    // this.prepareCategories();
  }

  prepareCategories(){
    this.categoryService.getCategories().subscribe(
      (result) =>{
        if(result.result.status == '200')
          this.categories = result.data.categoryList;
      }
    );
  }

  ngOnInit():void{
    // this.authService.prepareUserData();
    this.prepareCategories();
  }

  onImgError($event)
  {
    $event.target.src = "assets/images/placeholder-image.png";
  }

}
