import { UserData } from './../../models/user-data';
import { CartItem } from './../../models/cart-item';
import { Cart } from './../../models/cart';
import { Profile } from './../../models/profile';
import { User } from './../../models/user';
import { ErrorHandler } from './../../shared/error-handler';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  registerUrl = ' ';
  loginUrl = ' ';
  userUrl = ' ';
  profileUrl = ' ';
  private usersUrl = ' ';
  private userDataUrl = ' ';
  private changeImageUrl = ' ';
  private newImageUrl = ' ';
  private contactUrl = ' ';
  private errorHandler: ErrorHandler = new ErrorHandler();
  public currentUser: User;
  public profile: Profile;
  public cart: Cart;
  public cartItem: CartItem;
  public username: string;

  register(data: any): Observable<any> {
    try {
      return this.http.post<any>(this.registerUrl, data);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  pUserData(){
    if (this.isLoggedIn()){
      this.prepareUserData().subscribe( (uData: UserData) => {
        this.profile = uData.profile;
        this.username = `${uData.profile.firstname} ${uData.profile.lastname}`;
        this.cart = uData.cart;
        this.cartItem = uData.cartItem
      })
    }
    this.getCurrentUser().subscribe( (resUser) =>{
      this.currentUser = resUser;
    });
  }

  login(data: any): Observable<any> {
    try {
      return this.http.post<any>(this.loginUrl, data);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  userLogout(){
    localStorage.removeItem( key: 'token' );
      this.router.navigate( commands: ['./home'] );
  }

  prepareUserData(): Observable<UserData>{
        try {
        return this.http.get<any>(this.userDataUrl);
      } catch (error) {
        this.errorHandler.handleError(error);
      }

  }

  messageContact(messageForm: any): Observable<void> {
            try {
        return this.http.post<any>(this.contactUrl, messageForm);
      } catch (error) {
        this.errorHandler.handleError(error);
      }

  }

  getCurrentUser(){
        try {
      return this.http.get<any>(this.userUrl);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }


  getSystemUsers(): Observable<User[]>{
        try {
      return this.http.get<User[]>(this.usersUrl);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  getToken(){
    return localStorage.getItem( key: 'token' )
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem( key: 'token' )
  }

getUserProfile(): Observable<Profile>  {
      try {
      return this.http.get<any>(this.profileUrl);
    } catch (error) {
      this.errorHandler.handleError(error);
    }

}




}

