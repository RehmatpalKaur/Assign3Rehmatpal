import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsofPetsComponent } from './detailsofpets/detailsofpets.component';
import { ListofPetsComponent } from './listofpets/listofpets.component';

const routes: Routes = [
  { path: '', redirectTo: '/listofpets', pathMatch: 'full' }, // Redirect empty path to listofpets
  { path: 'listofpets', component: ListofPetsComponent }, // Route for the list of pets
  { path: 'detailsofpets/:id', component: DetailsofPetsComponent } // Route for pet details, expecting an id parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//app routing module
