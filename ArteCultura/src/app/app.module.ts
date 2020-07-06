import { TokenInterceptor } from './auth/token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { GraphQLModule } from './graphql.module';
import { MaterialsModule } from './materials/materials.module';

import { reducer as userReducer } from './store/reducers/user.reducer';
import { reducer as authReducer } from './store/reducers/auth.reducer';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginPageComponent,
    EventsListComponent,
    NavbarComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    GraphQLModule,
    StoreModule.forRoot({
      user: userReducer,
      auth: authReducer
    }),
    BrowserAnimationsModule,
    MaterialsModule,
    FlexLayoutModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
