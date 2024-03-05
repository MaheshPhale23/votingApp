import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { AppRoutingModule } from '../../app-routing.module';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { OurTeamComponent } from './our-team/our-team.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BarModule } from '../../shared/bar/bar.module';



@NgModule({
  declarations: [
    HomeMainComponent,
    LatestNewsComponent,
    OurTeamComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    BarModule,
    MatIconModule
  ],
  exports: [
    HomeMainComponent
  ]
})
export class HomeModule { }
