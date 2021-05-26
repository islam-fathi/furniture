import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderComponent } from './components/order/order.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { AlertComponent } from './shared/alert/alert.component';
import { ApplicationErrorComponent } from './shared/application-error/application-error.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResourceNotFoundComponent } from './shared/resource-not-found/resource-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilesModule } from './shared/files/files.module';
import {
  AccordionModule,
  CarouselModule,
  ModalModule,
  PaginationModule,
  PopoverModule,
  TooltipModule,
} from 'ngx-bootstrap';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { AddToCartComponent } from './shared/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    ContactComponent,
    OrderComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFilterPipe,
    AlertComponent,
    ApplicationErrorComponent,
    PageNotFoundComponent,
    ResourceNotFoundComponent,
    ProfileComponent,
    ProductCardComponent,
    LoginDialogComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    FilesModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
