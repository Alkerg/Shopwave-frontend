export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    imgUrlLocal: string;
    sku: string;
    stock: number;
    creationDate: string;
    updateDate: string;
    categoryId: number;
    categoryName: string;
}