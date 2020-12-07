import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ItemsComponent } from './components/items/items.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'categories',
  component: CategoriesComponent,
},
{
  path: 'add-category',
  component: AddCategoryComponent,
},
{
  path: 'add-category/:id',
  component: AddCategoryComponent,
},
{
  path: 'categories/:id',
  component: ItemsComponent,
},
{
  path: 'categories/:id/add-item',
  component: AddItemComponent,
},
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: '**',
  component: PageNotFoundComponent
}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
