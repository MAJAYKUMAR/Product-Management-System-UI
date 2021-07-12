import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{path:'home',component:AddComponent},
{path:'login',component:UpdateComponent},
{path:'contact',component:DisplayComponent},
{path:'about-us',component:DeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
