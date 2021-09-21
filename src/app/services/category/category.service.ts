import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private categoryByIdUrl = environment.apiUrl+environment.appMain+`/Category/getCategoryByCode`;
  private categoryListUrl = environment.apiUrl+environment.appMain+`/Category/getCategoryList`;

  constructor(private http: HttpClient) {
  }

  private errorHandler: ErrorHandler = new ErrorHandler();

  getCategories(): Observable<any> {

    let request = mainFunctions.requestData();
    let headers = new HttpHeaders({'Authorization':'Bearer '});
    return this.http.post(this.categoryListUrl,request,{headers: headers});    
  }

  getCategoryById(CategoryData: any): Observable<any> {
    let request = mainFunctions.requestData('category' , CategoryData);
    return this.http.post(this.categoryByIdUrl, request);
  }

}
