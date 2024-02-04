import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/modules/home/pages/home/home.component';
import { AddAprovCarComponent } from './modules/home/components/add-aprov-car/add-aprov-car.component';
import { ButtonAddItemComponent } from './shared/Components/button/button-add-item/button-add-item.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CreateItemApprovalCarComponent } from './shared/Components/popup/create-item-approval-car/create-item-approval-car.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateApprovalCarComponent } from './shared/Components/approvalCar/create-approval-car/create-approval-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListCarApprovalComponent } from './modules/home/components/list-car-approval/list-car-approval.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddAprovCarComponent,
    ButtonAddItemComponent,
    CreateItemApprovalCarComponent,
    CreateApprovalCarComponent,
    ListCarApprovalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
