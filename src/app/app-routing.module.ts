import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ProfileResolverService } from './resolvers/profile/profile-resolver.service';
import { OrderResolverService } from './resolvers/order/order-resolver.service';
import { CartResolverService } from './resolvers/cart/cart-resolver.service';
import { ProductResolverService } from './resolvers/product/product-resolver.service';
import { CategoryResolverService } from './resolvers/category/category-resolver.service';
import { UserAuthGuard } from './guards/user-auth.guard';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ShopComponent } from './components/shop/shop.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderYourDesignComponent } from './components/order-your-design/order-your-design.component';
import { SignupSuccessfullyComponent } from './components/auth/signup-successfully/signup-successfully.component';
import { LogOutComponent } from './components/auth/logout/log-out/log-out.component';


const routes =[
{
  path: '',
  component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'shop',
  component: ShopComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'terms',
  component: TermsAndConditionsComponent
},
{
  path: 'privacy',
  component: PrivacyComponent
},
{
  path: 'profile',
  component: ProfileComponent,
  // resolve: {
  //   profile: ProfileResolverService
  // },
  // canActivate: [UserAuthGuard]
},
{
  path: 'app-order-your-design',
  component: OrderYourDesignComponent
},
{
  path: 'orders',
  component: OrderComponent,
  resolve: {
    order: OrderResolverService
  },
  canActivate: [UserAuthGuard]
},
{
  path: 'cart',
  component: CartComponent,
  // resolve: {
  //   cart: CartResolverService
  // },
  // canActivate: [UserAuthGuard]
},
{
  path: 'checkout',
  component: CheckoutComponent,
  // canActivate: [UserAuthGuard]
},
{
  path: 'auth',
  children:[
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'logout',
      component: LogOutComponent,
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: 'signup/successfully',
      component: SignupSuccessfullyComponent
    }
  ]
},
{
  path: 'products',
  component: ProductListComponent,
  resolve: {
    products: ProductResolverService
  }

},
{
  path: 'product-details',
  component: ProductDetailsComponent,
},

{
  path: 'products/:id',
  component: ProductDetailsComponent
},
{
  path: 'categories',
  component: CategoryListComponent,
  resolve: {
    categories: CategoryResolverService
  }
},
{
  path: 'categories/:id',
  component: CategoryDetailsComponent
},

{
  path: ' ',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'admin', // this is the prefix route
  canActivate: [AdminAuthGuard],
  // lazy loading: this module will not loaded only if the the user navigate into it
  loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
