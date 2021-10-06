import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ProductService } from 'src/app/_services';
import { Product } from 'src/app/_models';
import { ConfirmationService, MessageService } from 'primeng/api';



@Component({ templateUrl: 'list.component.html' ,
providers: [ConfirmationService]})
export class ListComponent implements OnInit {
    Products!: Product[];
    icon: string | undefined;

    constructor(private Productservice: ProductService,private messageService: MessageService,private confirmationService: ConfirmationService) {}

    ngOnInit() {
        this.Productservice.getAll()
            .pipe(first())
            .subscribe(Products => this.Products = Products);
    }

    deleteproduct(id: string) {

        this.icon = "fa-question-circle";
        this.confirmationService.confirm({
            message: 'are you sure to delete record.',
            header: 'delete confirm',
           
            accept: () => {
                const product = this.Products.find(x => x.id === id);
                if (!product) return;
                product.isDeleting = true;
                this.Productservice.delete(id)
                    .pipe(first())
                    .subscribe(() => this.Products = this.Products.filter(x => x.id !== id));
                    this.messageService.add({severity:'info', summary: 'Record is deleted successully', detail:'record deleted'});
            },
            reject: () => {
            }
        });
       
    }
  

  
}