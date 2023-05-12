// import { useRouter } from "next/router";

import ProductCard from "@/app/category/[category]/components/ProductCard";
import { Product } from "../../entities/product";
import ProductList from "./components/ProductsList";

const getCategoryProductsList = async (category: string) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const products = await res.json();

    if(products.length === 0) {
        return [] as Product[];
    }

    return products as Product[]
}

export default async function Category({ params }: { params: { category: string }}) {
    
    const products = await getCategoryProductsList(params.category);
    
    return (
        <div>
            <h1>Category: {params.category}</h1>

            <ProductList products={products}/>
        </div>
    )
}