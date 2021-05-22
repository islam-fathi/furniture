import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { RouterModule } from '@angular/router';


const routes =[
  {
    path: '',
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'management',
    children:[
    {
      path: 'manage-categories',
      component: ManageCategoriesComponent
    },
    {
      path: 'manage-users',
      component: ManageUsersComponent
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
