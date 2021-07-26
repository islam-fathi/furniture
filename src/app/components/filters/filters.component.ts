import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  products: any =[];
  categories: any=[];
  materials: any=[];
  finishes: any=[];
  styles: any=[];
  colors: any=[];

  pageCurrent: number = 1;

  FilterForm: FormGroup;

  config = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: this.pageCurrent,
    totalItems: this.products.lenght
  };

  constructor(private productService: ProductService
    , private categoryService: CategoryService
    , private filterService: FilterService
    ,  private formBuilder: FormBuilder) {

      this.FilterForm = this.formBuilder.group({
        categoryList: new FormArray([]),
        materialList: new FormArray([]),
        styleList: new FormArray([]),
        finishList: new FormArray([]),
        colorList: new FormControl(''),
        maxPrice:[''],
        availablility:['']
      });
    
  }

  get categoriesFormArray() {
    return this.FilterForm.controls.categoryList as FormArray;
  }

  private addCategoriesCheckboxes() {
    this.categories.forEach(() => this.categoriesFormArray.push(new FormControl(false)));
  }

  get materialsFormArray() {
    return this.FilterForm.controls.materialList as FormArray;
  }

  private addmaterialsCheckboxes() {
    this.materials.forEach(() => this.materialsFormArray.push(new FormControl(false)));
  }

  get stylesFormArray() {
    return this.FilterForm.controls.styleList as FormArray;
  }

  private addstylesCheckboxes() {
    this.styles.forEach(() => this.stylesFormArray.push(new FormControl(false)));
  }

  get finishsFormArray() {
    return this.FilterForm.controls.finishList as FormArray;
  }

  private addfinishsCheckboxes() {
    this.finishes.forEach(() => this.finishsFormArray.push(new FormControl(false)));
  }
  
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  ngOnInit(): void {
    // get categories
    this.categoryService.getCategories().subscribe(
      (result) =>{
        if(result.result.status == '200')
          this.categories = result.data.categoryList;
          this.addCategoriesCheckboxes();
      }
    );
    // get Material
    this.filterService.getmateriallist().subscribe(
      (result) =>{
        if(result.result.status == '200')
          this.materials = result.data.materialList;
          this.addmaterialsCheckboxes();
      }
    );
    // get finish
    this.filterService.getfinishList().subscribe(
      (result) =>{
        if(result.result.status == '200')
          this.finishes = result.data.finishList;
          this.addfinishsCheckboxes();
        }
    );
    // get style
    this.filterService.getStyleList().subscribe(
      (result) =>{
        if(result.result.status == '200')
          this.styles = result.data.styleList;
          this.addstylesCheckboxes();
        }
    );
    // get colors
    this.filterService.getColorList().subscribe(
      (result) =>{
        if(result.result.status == '200')
          this.colors = result.data.colorList;
        }
    );
    // get products
    this.productService.getProductList().subscribe(
      (result) =>{
        if(result.result.status == '200')
          this.products = result.data.productList;
      }
    );

    

  }

  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }

  onImgError($event)
  {
    $event.target.src = "assets/images/placeholder-image.png";
  }

  submit()
  {
    this.FilterForm.value.categoryList = this.FilterForm.value.categoryList
      .map((checked, i) => checked ? this.categories[i].catNo : null)
      .filter(v => v !== null);

      this.FilterForm.value.finishList = this.FilterForm.value.finishList
      .map((checked, i) => checked ? this.finishes[i].finishNo : null)
      .filter(v => v !== null);

      this.FilterForm.value.materialList = this.FilterForm.value.materialList
      .map((checked, i) => checked ? this.materials[i].materialNo : null)
      .filter(v => v !== null);

      this.FilterForm.value.styleList = this.FilterForm.value.styleList
      .map((checked, i) => checked ? this.styles[i].styleNo : null)
      .filter(v => v !== null);

      if(this.FilterForm.value.availablility == true)
      this.FilterForm.value.availablility=1;

      let filter = {};

    for (const [key, value] of Object.entries(this.FilterForm.value)) {
      if(Array.isArray(value) && value.length>0)
        filter[key]=value;
      else if(value>0)
        filter[key]=value;
    }

    this.productService.getProductFilteresList(filter).subscribe(
      (result) =>{
        if(result.result.status == '200')
          this.products = result.data.productList;
      }
    );

  }

}
