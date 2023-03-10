import { OrderLocationData } from "./orderLocationData";

export type ProductId = {
    id: number;
}

export type OrderPayLoad = {
    products: ProductId[];
} & OrderLocationData;