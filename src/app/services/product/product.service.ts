import { Product } from './../../models/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from 'src/app/shared/error-handler';
import { environment } from 'src/environments/environment';
import { mainFunctions } from 'src/main';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private getProductListUrl = environment.apiUrl+environment.appMain+'/PROD/Product/getProductList';
  private errorHandler: ErrorHandler = new ErrorHandler();

  constructor(private http: HttpClient) {}

  getProductList(): Observable<any> {
    let request = mainFunctions.requestData();
      return this.http.post(this.getProductListUrl, request);
  }

  getProductFilteresList(filter:any): Observable<any> {
    let request = mainFunctions.requestData('filter' , filter);
      return this.http.post(this.getProductListUrl, request);
  }

  getProductsById(id: number): Observable<Product> {
    try {
      const urlById = `${this.getProductListUrl}/${id}`;
      return this.http.get<Product>(urlById);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  insertToCart(
    productId: number,
    cartItemId: number,
    cartQuantity: number
  ): Observable<Product> {
    try {
      const params = new HttpParams().set('quantity', cartQuantity.toString());
      const urlById = `${this.getProductListUrl}/${productId}/addtocart/${cartItemId}`;
      return this.http.post<Product>(urlById, null, {
        params,
      });
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  updateProductCartQuantity(
    productId: number,
    cartQuantity: number
  ): Observable<void> {
    try {
      const params = new HttpParams().set(
        'cartQuantity',
        cartQuantity.toString()
      );
      const urlById = `${this.getProductListUrl}/${productId}/update-quantity`;
      return this.http.patch<void>(urlById, null, {
        params,
      });
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}
