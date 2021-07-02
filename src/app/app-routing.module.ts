import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoredComponent } from './bored/bored.component';
import { DomainsComponent } from './domains/domains.component';
import { HomeComponent } from './home/home.component';
import { PublicApisComponent } from './public-apis/public-apis.component';
import { RandomFoodComponent } from './random-food/random-food.component';
import { ShowsComponent } from './shows/shows.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "bored", component: BoredComponent},
  {path: "shows", component: ShowsComponent},
  {path: "countries", component: DomainsComponent},
  {path: "randomFoodImages", component: RandomFoodComponent},
  {path: "publicApis", component: PublicApisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
