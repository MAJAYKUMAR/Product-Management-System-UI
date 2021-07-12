import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
        //{path:'',redirectTo:'home',pathMatch:'full'},
       {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
        {path:'add',component:AddComponent ,canActivate:[AuthGuardService]},
        {path:'update',component:UpdateComponent ,canActivate:[AuthGuardService]},
        {path:'delete',component:DeleteComponent ,canActivate:[AuthGuardService]},
        {path:'display',component:DisplayComponent ,canActivate:[AuthGuardService]},
        {path:'login',component:LoginComponent},
        {path:'logout',component:LogoutComponent ,canActivate:[AuthGuardService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
