import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ProductService } from 'src/app/_services';
import { Product } from 'src/app/_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    Products!: Product[];

    constructor(private Productservice: ProductService) {}

    ngOnInit() {
        this.Productservice.getAll()
            .pipe(first())
            .subscribe(Products => this.Products = Products);
    }

    deleteproduct(id: string) {
        const product = this.Products.find(x => x.id === id);
        if (!product) return;
        product.isDeleting = true;
        this.Productservice.delete(id)
            .pipe(first())
            .subscribe(() => this.Products = this.Products.filter(x => x.id !== id));
    }
}