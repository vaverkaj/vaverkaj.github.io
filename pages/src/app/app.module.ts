import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockCommentComponent } from './components/block-comment/block-comment.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockCommentComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
