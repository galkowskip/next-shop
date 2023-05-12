import { Product } from "@/app/entities/product"
import ProductCard from "./ProductCard"

import styles from "./ProductsList.module.css"

export default function ProductList({ products }: { products: Product[] }) {
    return (
        <div className={styles.productGrid}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}