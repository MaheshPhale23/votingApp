import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './Modules/home/home.module';
import { AuthModule } from './authentication/auth/auth.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BarModule } from './shared/bar/bar.module';
import { authInterceptorProviders } from './service/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AuthModule,
    BarModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync(),
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
