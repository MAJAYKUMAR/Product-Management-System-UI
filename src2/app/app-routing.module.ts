import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [

        {path:'home',component:HomeComponent},
        {path:'add',component:AddComponent},
        {path:'update',component:UpdateComponent},
        {path:'delete',component:DeleteComponent},
        {path:'display',component:DisplayComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
