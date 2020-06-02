import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { ProTopComponent } from './pro-top/pro-top.component';
import { HttpClientModule } from '@angular/common/http';
import { ResizableModule } from 'angular-resizable-element';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    ProTopComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SortableModule,
    HttpClientModule,
    ResizableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
