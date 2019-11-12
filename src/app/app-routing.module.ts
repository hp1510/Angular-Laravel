import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { MainComponent } from './main/main.component';
import { ProjecthomeComponent } from './projecthome/projecthome.component';
import { ProjecteditComponent } from './projectedit/projectedit.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'projecthome', component:ProjecthomeComponent},
  {path:'projectedit/:id', component:ProjecteditComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
