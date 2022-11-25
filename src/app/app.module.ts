import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './view-post/view-post.component';

const myRoute : Routes=[
  {
    path:"",
    component:AddPostComponent
  },
  {
    path:"view",
    component:ViewPostComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
