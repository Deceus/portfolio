import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullpageComponent } from './components/fullpage/fullpage.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FullpageComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'projects', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
