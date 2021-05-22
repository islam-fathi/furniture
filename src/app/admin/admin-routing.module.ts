import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { RouterModule } from '@angular/router';
import { CategoryResolverService } from '../resolvers/category/category-resolver.service';
import { UserResolverService } from '../resolvers/user/user-resolver.service';
import { AdminAuthGuard } from '../guards/admin-auth.guard';
import { UserAuthGuard } from '../guards/user-auth.guard';


const routes =[
  {
    path: '',
    canActivate: [AdminAuthGuard],
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AdminAuthGuard]
      }
    ]
  },
  {
    path: 'management',
    children:[
    {
      path: 'manage-categories',
      component: ManageCategoriesComponent,
      resolve: {
        categories: CategoryResolverService
      },
      canActivate: [AdminAuthGuard]
    
    },
    {
      path: 'manage-users',
      component: ManageUsersComponent,
      resolve: {
        allUsers: UserResolverService
      },
      canActivate: [AdminAuthGuard]
    }  
    ]
  }

]  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
