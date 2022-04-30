import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlockCommentComponent } from './components/block-comment/block-comment.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TitleComponent } from './components/title/title.component';
import { WorkComponent } from './components/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockCommentComponent,
    NavigationComponent,
    TitleComponent,
    AboutComponent,
    WorkComponent,
    ProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
