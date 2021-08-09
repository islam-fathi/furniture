import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cart-item';
import { environment } from 'src/environments/environment';
import { mainFunctions } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  private _AddcartUrl = environment.apiUrl+environment.appMain+`/Cart/addCart`;
  private _cartUrl = environment.apiUrl+environment.appMain+`/Cart/getCartProductList`;
  private _cartItemUrl = `http://localhost:4200/cart_items`;
  private errorHandler: ErrorHandler = new ErrorHandler();


  addCart(CartItemData: any): Observable<any> {
    let request = mainFunctions.requestData('cart' , CartItemData);
    return this.http.post(this._AddcartUrl, request);
  }

  getCart(CartItemData: any): Observable<any> {
    let request = mainFunctions.requestData('cart' , CartItemData);
    return this.http.post(this._cartUrl, request);
  }

  getCartItem(id: number): Observable<CartItem> {
    try {
      const urlById = `${this._cartItemUrl}/${id}`;
      return this.http.get<CartItem>(urlById);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  clearCartProducts(cartItemId: number): Observable<CartItem> {
    try {
      const clearUrl = `${this._cartItemUrl}/${cartItemId}/products/clear-products`;
      return this.http.delete<CartItem>(clearUrl);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  placeOrder(cartItemId: number, productId: number,
            createOrderDto: any): Observable<void> {
    try {
      const orderUrl = `${this._cartItemUrl}/${cartItemId}/products/${productId}/placeorder`;
      return this.http.post<void>(orderUrl, createOrderDto);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  removeFromCart(cartItemId: number, productId: number): Observable<CartItem> {
    try {
      const removeUrl = `${this._cartItemUrl}/${cartItemId}/products/${productId}/remove-from-cart`;
      return this.http.delete<CartItem>(removeUrl);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  checkout(cartItemId: number, createOrderDto: any): Observable<void> {
    try {
      const checkoutUrl = `${this._cartItemUrl}/${cartItemId}/checkout`;
      return this.http.post<void>(checkoutUrl, createOrderDto);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}
