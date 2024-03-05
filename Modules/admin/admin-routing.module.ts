import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { TotalVotesComponent } from './total-votes/total-votes.component';
import { CadndidateListComponent } from './cadndidate-list/cadndidate-list.component';

const routes: Routes = [
  {
    path:'',
    component:AdminMainComponent,
    children:[
      {path:'', redirectTo:'dashboard', pathMatch:'full'},
      {path:'dashboard', component:AdminDashboardComponent},
      {path:'profile', component:ProfileComponent},
      {path:'userList', component:UserListComponent},
      {path:'addCandidate', component:AddCandidateComponent},
      {path:'totalVote', component:TotalVotesComponent},
      {path:'candidateList', component:CadndidateListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
