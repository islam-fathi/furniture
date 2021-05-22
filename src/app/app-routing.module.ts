import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
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


const routes =[
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'profile',
  component: ProfileComponent,
  resolve: {
    profile: ProfileResolverService
  },
  canActivate: [UserAuthGuard]
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
  resolve: {
    cart: CartResolverService
  },
  canActivate: [UserAuthGuard]
},
{
  path: 'auth',
  children:[
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
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
