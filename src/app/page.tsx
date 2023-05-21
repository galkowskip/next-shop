import CategoriesBar from "./components/CategoriesBar"
import { Category } from "./entities/categories";

const getCategoriesList = async () => {
  const res = await fetch(`http://app:3000/categories/`)
  const categories = await res.json();

  return categories as Category[];
};

export default async function Home() {
  const categories = await getCategoriesList();

  return (
    <div>
      <CategoriesBar categories={categories}/>

      <h1>Welcome to My 123131Next.js App!</h1>
      <p>This is the Home page for my Next.js app.</p>
    </div>
  );
}
