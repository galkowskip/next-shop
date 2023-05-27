import { Product } from "@/app/entities/product"
import ProductCard from "./ProductCard"

import styles from "./ProductsList.module.css"

export default function ProductList({ products }: { products: Product[] }) {
    if (products && products.length === 0) {
        return (
            <div className={styles.productGrid}>
                <h1>No products found</h1>
            </div>
        )
    } else {
        console.log(products)
        return (
            <div className={styles.productGrid}>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        )
    }
}