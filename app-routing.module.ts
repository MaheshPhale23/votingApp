import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './Modules/home/home-main/home-main.component';
import { LoginComponent } from './authentication/auth/login/login.component';
import { RegisterComponent } from './authentication/auth/register/register.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'home',
    component:HomeMainComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./Modules/admin/admin.module').then((mod)=>mod.AdminModule),
    canActivate:[authGuard]
  },
  {
    path:'user',
    loadChildren:()=>import('./Modules/user/user.module').then((mod)=>mod.UserModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
