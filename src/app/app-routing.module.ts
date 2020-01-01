import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CampaigndetalisComponent } from './views/campaigndetalis/campaigndetalis.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'campign/:id',component:CampaigndetalisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
