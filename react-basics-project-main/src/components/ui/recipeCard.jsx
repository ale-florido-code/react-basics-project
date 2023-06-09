import "./RecipeCardStyle/RecipeCard.css";

export const RecipeCard = ({ recipe, onClick}) => {
  const info = recipe.recipe.recipe;

  const veganVegetarian = () => {
    if (info.healthLabels.includes("Vegan")) {
      return "Vegan";
    } else if (info.healthLabels.includes("Vegetarian")) {
      return "Vegetarian";
    }
  };

  const dietLabels = () => {
    if (info.dietLabels.length !== 0) {
      let labelList = info.dietLabels.map((labels) => {
        return <li>{labels}</li>;
      });

      return <ul className="dietLabels">{labelList}</ul>;
    }
  };

  const cautions = () => {
    if (info.cautions.length !== 0) {
      let cautionList = info.cautions.map((cautions) => {
        return <li>{cautions}</li>;
      });

      return (
        <>
          <p>Cautions:</p>
          <ul className="cautionList">{cautionList}</ul>
        </>
      );
    }
  };

  return (
    <>
      <button className="recipeCard" onClick={() => onClick(recipe)}>
        <img src={info.image} className="recipeCardPicture"></img>
        <div className="recipeCardInfoBox">
          <p className="mealType">{info.mealType}</p>
          <h2>{info.label}</h2>
          <p className="veganVegetarian">{veganVegetarian()}</p>
          {dietLabels()}
          <p>Dish: {info.dishType}</p>
          {cautions()}
        </div>
      </button>
    </>
  );
};
