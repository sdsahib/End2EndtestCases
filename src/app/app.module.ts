import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './modules/layout/mainlayout/mainlayout.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowtableComponent } from './modules/layout/showtable/showtable.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    ShowtableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
