import { Product } from "../../../entities/product";
import styles from "./ProductCard.module.css"
export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className={styles.productCard}>
            <img className={styles.productCardImage} src={product.image} alt={product.title} />
            
            <hr className={styles.productCardDivider}/>

            <h2 className={styles.productCardTitle}>{product.title}</h2>
            <p className={styles.productCardDescription}>{product.description}</p>
        </div>
    )
}