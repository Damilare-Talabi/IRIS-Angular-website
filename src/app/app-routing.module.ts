import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '', redirectTo: '/body', pathMatch: 'full'},
  {path: 'projects', 
component: ProjectsComponent},
{path: 'technologies', 
component: TechnologiesComponent},
{path: 'body', 
component: BodyComponent},
// {path: '.', 
// component: DescriptionComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
