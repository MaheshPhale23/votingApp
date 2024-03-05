import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMainComponent } from './user-main/user-main.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserMainComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    UserFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class UserModule { }
