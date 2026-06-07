import { Routes } from '@angular/router';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

export const routes: Routes = [
  { path: 'post/:slug', component: PostDetailComponent },
  { path: 'project/:slug', component: ProjectDetailComponent },
];
