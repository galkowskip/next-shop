import Link from "next/link";
import styles from "./CategoriesBar.module.css";
import { Category } from "../entities/categories";

export default function CategoriesBar({ categories }: { categories: Category[] }) {
  console.log(categories);
  return (
    <div className={styles.categoriesBar}>
      <ul className={styles.categoriesBarList}>
        {categories.map((category) => (
          <Link key={category._id} href={`/category/${category._id}`} className={styles.categoriesBarListItem}>{category.name}</Link>
        ))}
      </ul>
    </div>
  );
}