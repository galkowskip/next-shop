import CategoriesBar from "./components/CategoriesBar"

const getCategoriesList = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  const categories = await res.json();

  return categories as string[];
};


export default async function Home() {
  const categories = await getCategoriesList();

  return (
    <div>
      <CategoriesBar categories={categories}/>

      <h1>Welcome to My Next.js App!</h1>
      <p>This is the Home page for my Next.js app.</p>
    </div>
  );
}
