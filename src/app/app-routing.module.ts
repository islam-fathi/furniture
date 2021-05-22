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


const routes =[
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'profile',
  component: ProfileComponent
},
{
  path: 'orders',
  component: OrderComponent
},
{
  path: 'cart',
  component: CartComponent
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
  component: ProductListComponent
},
{
  path: 'products/:id',
  component: ProductDetailsComponent
},
{
  path: 'categories',
  component: CategoryListComponent
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
