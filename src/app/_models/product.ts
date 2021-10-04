import { ProductType } from './product-type';

export class Product {
    id!: string;

    proname!: string;
    description!: string;
    amount!: string;
    productType!: ProductType;
    isDeleting: boolean = false;
}