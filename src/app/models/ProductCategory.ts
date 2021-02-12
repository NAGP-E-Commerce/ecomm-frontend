import { Product } from "./Product";

export class ProductCategory {
    "name": string;
    "superCategory": string;
    "similarCategory": string;
    "product": Product[];
}