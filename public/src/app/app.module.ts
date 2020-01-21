import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    NewComponent,
    ListComponent,
    PageNotFoundComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }


