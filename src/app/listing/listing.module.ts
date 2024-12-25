import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SortModalComponent } from './sort-modal/sort-modal.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ListingPageComponent } // Default route for the module
];



@NgModule({
  declarations: [
    ItemListComponent,
    CategoriesComponent,
    ListingPageComponent,
    SortModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ListingModule { }
