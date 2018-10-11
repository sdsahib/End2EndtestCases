import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './modules/layout/mainlayout/mainlayout.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowtableComponent } from './modules/layout/showtable/showtable.component';
import { TableComponent } from './modules/layout/table/table.component';
import { ModalComponent } from './modules/layout/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatemodalComponent } from './modules/layout/updatemodal/updatemodal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    ShowtableComponent,
    TableComponent,
    ModalComponent,
    UpdatemodalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ ModalComponent],
  entryComponents:[ModalComponent,
    UpdatemodalComponent]
})
export class AppModule { }
