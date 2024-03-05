import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { TotalVotesComponent } from './total-votes/total-votes.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { CadndidateListComponent } from './cadndidate-list/cadndidate-list.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AdminMainComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    SidebarComponent,
    ProfileComponent,
    UserListComponent,
    AddCandidateComponent,
    TotalVotesComponent,
    CadndidateListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class AdminModule { }
