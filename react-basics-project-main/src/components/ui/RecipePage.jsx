import "./RecipePageStyle/RecipePage.css";

export const RecipePage = (recipe) => {
  const info = recipe.recipe.recipe;

  const healthLabels = () => {
    let healthLabelList = info.healthLabels.map((label) => {
      return <li>{label}</li>;
    });

    return (
      <>
        <p>Health labels:</p>
        <ul className="healthLabelList">{healthLabelList}</ul>
      </>
    );
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

  // const totalNutrients = () => {
  //   const filters = ["ENERC_KCAL", "CHOCDF", "PROCNT", "FAT", "CHOLE", "NA"];
  //   const totalNutrients = info.totalNutrients;

  //   const neededNutrients = (filters, nutrients) => {
  //     filters.forEach((filter) => {
  //       if (nutrients === filter) {
  //         return totalNutrients.filter;
  //       }
  //     });
  //   };

  //   console.log(neededNutrients(filters, totalNutrients));
  // };
  // totalNutrients();

  return (
    <>
      <div className="recipePage">
        <div className="recipePageBanner">
          <button type="button" id="backBtn">backbutton</button>
        </div>
        <img src={info.image} className="recipePagePicture"></img>
        <div className="recipePageInfo">
          <div className="recipePageInfoLeft">
            <p>{info.mealType}</p>
            <h2>{info.label}</h2>
          </div>
          <div className="recipePageInfoRight">
            {healthLabels()}
            {dietLabels()}
            {cautions()}
            <p>Total nutrients:</p>
            {/* {totalNutrients()} */}
          </div>
        </div>
      </div>
    </>
  );
};
