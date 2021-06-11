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
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cartService: CartService
  ) {
  }

  _registerUrl = `https://furniture-v1.herokuapp.com/lamaderas/v1/User/register`;
  _loginUrl = `https://furniture-v1.herokuapp.com​/lamaderas​/v1​/User/login`;
  _userUrl = ``;
  _profileUrl = `https://furniture-v1.herokuapp.com​/lamaderas/v1/User/profile`;
  private _usersURL = ``;
  private _userDataURL = ``;

  private imageChangeUrl = `https://furniture-v1.herokuapp.com​/lamaderas/v1/User/changeImage`;
  private newImageUrl = ``;
  private contactUrl = `http://localhost:4200/contacts/new-mail`;
  errorsHandler = new ErrorHandler();
  public username: string;
  public cart: Cart;
  public cartItem: CartItem;
  public profile: Profile;
  public currentUser: User;

  registerUser(registrationInfo): Observable<void> {
    return this.http.post<void>(this._registerUrl, registrationInfo);
  }

  prepareUserData() {
    if (this.isLoggedIn()) {
      this.getCurrentUser().subscribe(resUser => {
        this.currentUser = resUser;
      });
      this.pUserData().subscribe(uData => {
        this.profile = uData.profile;
        this.username = `${uData.profile.firstname}
        ${uData.profile.lastname}`;
      });
    }
  }

  refreshInfo() {
    if (this.isLoggedIn()) {
      this.pUserData().subscribe(uData => {
        this.profile = uData.profile;
        this.cart = uData.cart;
        this.cartItem = uData.cartItem;
      });
    }
  }

  pUserData(): Observable<UserData> {
    try {
      return this.http.get<UserData>(this._userDataURL);
    } catch (err) {
      this.errorsHandler.handleError(err);
    }
  }

  messageContact(messageForm: any): Observable<void> {
    try {
      return this.http.post<void>(this.contactUrl, messageForm);
    } catch (err) {
      this.errorsHandler.handleError(err);
    }
  }

  updateProfile(updateForm): Observable<Profile> {
    try {
      return this.http.put<Profile>(
        `${this._profileUrl}/userprofile/edit`,
        updateForm
      );
    } catch (error) {
      this.errorsHandler.handleError(error);
    }
  }

  getCurrentUser(): Observable<User> {
    try {
      return this.http.get<User>(`${this._userUrl}`);
    } catch (err) {
      this.errorsHandler.handleError(err);
    }
  }

  changeProfileImage(imageForm): Observable<Profile> {
    try {
      return this.http.patch<Profile>(this.imageChangeUrl, imageForm);
    } catch (err) {
      this.errorsHandler.handleError(err);
    }
  }

  addProfileImage(imageForm): Observable<Profile> {
    try {
      return this.http.post<Profile>(this.newImageUrl, imageForm);
    } catch (err) {
      this.errorsHandler.handleError(err);
    }
  }

  getUsers(): Observable<User[]> {
    try {
      return this.http.get<User[]>(this._usersURL);
    } catch (err) {
      this.errorsHandler.handleError(err);
    }
  }

  login(user: any): Observable<any> {
    try {
      return this.http.post<any>(this._loginUrl, user);
    } catch (err) {
      this.errorsHandler.handleError(err);
    }
  }

  getUserProfile(): Observable<Profile> {
    try {
      return this.http.get<Profile>(this._profileUrl);
    } catch (err) {
      this.errorsHandler.handleError(err);
    }
  }

  userLogout() {
    this.router.navigate(["/auth/login"]);
    return localStorage.removeItem("token");
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
    console.log(Response)
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
