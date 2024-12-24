import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingPageComponent } from './listing/listing-page/listing-page.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule)
  },
  { path: '', redirectTo: '/', pathMatch: 'full' } // Redirect to listing page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,SharedModule]
})
export class AppRoutingModule { }
