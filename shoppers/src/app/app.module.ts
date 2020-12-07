import { AuthGuardService } from './services/auth-guard.service';
import { CategoriesResolverService } from './services/categories-resolver.service';
import { NavigateAwayGuardService } from './services/navigate-away-guard.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { DataService } from './services/data.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ItemsComponent } from './components/items/items.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    CategoriesComponent,
    ItemsComponent,
    AddCategoryComponent,
    AddItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    TokenService,
    DataService,
    NavigateAwayGuardService,
    CategoriesResolverService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
