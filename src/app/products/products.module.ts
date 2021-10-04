import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { TableModule } from 'primeng/table';
import {  ToastModule } from 'primeng/Toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductsRoutingModule,
         TableModule,
         ToastModule,ButtonModule,
       

    ],
    declarations: [
        LayoutComponent,
       ListComponent,
        AddEditComponent
    ],entryComponents: [
        AddEditComponent
      ], 
       providers:[MessageService],
})
export class ProductsModule { }