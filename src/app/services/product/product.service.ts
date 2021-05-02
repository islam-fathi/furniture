import { Product } from './../../models/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from 'src/app/shared/error-handler';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:3000/products';
  private errorHandler: ErrorHandler = new ErrorHandler();

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    try {
      return this.http.get<Product[]>(this.url);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  getProductsById(id: number): Observable<Product> {
    try {
      const urlById = `${this.url}/${id}`;
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
      const urlById = `${this.url}/${productId}/addtocart/${cartItemId}`;
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
      const urlById = `${this.url}/${productId}/update-quantity`;
      return this.http.patch<void>(urlById, null, {
        params,
      });
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}
