import Link from "next/link";
import styles from "./CategoriesBar.module.css";

export default function CategoriesBar({ categories }: { categories: string[] }) {

  const normalizeCategoryNameToLink = (category: string) => {
    return category.toLowerCase().replace(' ', '-');
  }
  return (
    <div className={styles.categoriesBar}>
      <ul className={styles.categoriesBarList}>
        {categories.map((category) => (
          <Link key={category} href={`/category/${normalizeCategoryNameToLink(category)}`} className={styles.categoriesBarListItem}>{category}</Link>
        ))}
      </ul>
    </div>
  );
}