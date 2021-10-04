import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

import { ProductType } from 'src/app/_models';

// array in local storage for registered Products
const ProductsKey = 'crudpro';
const ProductsJSON = localStorage.getItem(ProductsKey);
let Products: any[] = ProductsJSON ? JSON.parse(ProductsJSON) : [{
    id: 1,
    proname:'product a',
    description: 'for test ',
    amount: '100',
    productType: ProductType.Basic
}];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/products') && method === 'GET':
                    return getProducts();
                case url.match(/\/products\/\d+$/) && method === 'GET':
                    return getproductById();
                case url.endsWith('/products') && method === 'POST':
                    return createproduct();
                case url.match(/\/products\/\d+$/) && method === 'PUT':
                    return updateproduct();
                case url.match(/\/products\/\d+$/) && method === 'DELETE':
                    return deleteproduct();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function getProducts() {
            return ok(Products.map(x => basicDetails(x)));
        }

        function getproductById() {
            const product = Products.find(x => x.id === idFromUrl());
            return ok(basicDetails(product));
        }
      
        function createproduct() {
            const product = body;

            if (Products.find(x => x.proname === product.proname)) {
                return error(`product with the name [${product.proname}] already exists`);
            }

            // assign product id and a few other properties then save
            product.id = newproductId();
            Products.push(product);
            localStorage.setItem(ProductsKey, JSON.stringify(Products));

            return ok();
        }

        function updateproduct() {
            let params = body;
            let product = Products.find(x => x.id === idFromUrl());

            if (params.amount !== product.proname && Products.find(x => x.proname === params.proname)) {
                return error(`product with the name [${product.proname}] already exists`);
            }

           
            // update and save product
            Object.assign(product, params);
            localStorage.setItem(ProductsKey, JSON.stringify(Products));

            return ok();
        }

        function deleteproduct() {
            Products = Products.filter(x => x.id !== idFromUrl());
            localStorage.setItem(ProductsKey, JSON.stringify(Products));
            return ok();
        }

        // helper functions

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); // delay observable to simulate server api call
        }

        function error(message: any) {
            return throwError({ error: { message } })
                .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }

        function basicDetails(product: any) {
            const { id, proname,description, amount, productType } = product;
            return { id, proname,description, amount, productType };
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }

        function newproductId() {
            return Products.length ? Math.max(...Products.map(x => x.id)) + 1 : 1;
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};