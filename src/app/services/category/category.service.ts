import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';
import { mainFunctions } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryByIdUrl = environment.apiUrl+environment.appMain+`/ADM/Category/getCategoryByCode`;
  private categoryListUrl = environment.apiUrl+environment.appMain+`/ADM/Category/getCategoryList`;

  constructor(private http: HttpClient) {
  }

  private errorHandler: ErrorHandler = new ErrorHandler();

  getCategories(): Observable<any> {

    let request = mainFunctions.requestData();

    return this.http.post<any>(this.categoryListUrl, request);    
  }

  getCategoryById(CategoryData: any): Observable<any> {
    let request = mainFunctions.requestData('category' , CategoryData);
    return this.http.post(this.categoryByIdUrl, request);
  }

}
