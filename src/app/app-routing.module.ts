import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
  // {path:"",component:BlockchainComponent},
  {path:"app-display",component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
