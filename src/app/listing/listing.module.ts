import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListingPageComponent } // Default route for the module
];



@NgModule({
  declarations: [
    ItemListComponent,
    CategoriesComponent,
    ListingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListingModule { }
