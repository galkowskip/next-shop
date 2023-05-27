export interface Product {
    _id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image?: string;
    category_id: string;
    createdAt?: Date;
    updatedAt?: Date;
}
