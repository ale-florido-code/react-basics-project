import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard.jsx";
// import { RecipePage } from "../components/ui/RecipePage";

export function RecipeListPage() {
  const recipeList = data.hits;
  let x = recipeList.map((element) => {
    return <>
      <RecipeCard recipe={element} />;
      {/* <RecipePage recipe={element} />; */}
      </>
  });

  return (
    <>
      <div className="recipeCardList">{x}</div>;
    </>
  );
}
