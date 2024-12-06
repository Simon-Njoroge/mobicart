export type Tproduct = {
    id:number;
    name:string;
    price:number;
    image_url:string;
    stock: number;
    description:string;
    created_at:string;
    category:number;
}

export type TNavbar={
    id:number;
    name:string;
    description:string;
}

export type TCart={
    id:number;
    user: string;
    product:string;
    quantity: number;
    price:number;
}