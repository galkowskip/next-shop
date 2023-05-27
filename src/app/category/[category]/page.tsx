// import { useRouter } from "next/router";

import { Product } from "../../entities/product";
import ProductList from "./components/ProductsList";

const getCategoryProductsList = async (category: string) => {
    const res = await fetch(`http://app:3000/categories/${category}`)
    const data = await res.json();

    return data as { name: string, products: Product[] };
}

export default async function Category({ params }: { params: { category: string } }) {

    const data = await getCategoryProductsList(params.category);

    return (
        <div>
            <h1>Category: {data.name ? data.name : ''}</h1>

            <ProductList products={data.products} />
        </div>
    )
}