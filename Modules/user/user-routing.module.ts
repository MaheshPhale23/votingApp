import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMainComponent } from './user-main/user-main.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:UserMainComponent,
    children:[
      {path:'', redirectTo:'dashboard', pathMatch:"full"},
      {path:'dashboard', component:UserDashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
