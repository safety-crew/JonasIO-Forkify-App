import * as model from './model.js';
import paginationView from './Views/paginationView.js';
import RecipeView from './Views/recipeView.js';
import ResultsView from './Views/resultsView.js';
import SearchView from './Views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) {
      return;
    }

    RecipeView.renderSpinner();

    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    RecipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    RecipeView.renderError(`${err} 🔥`);
  }
};

const controlSearchResults = async function () {
  try {
    ResultsView.renderSpinner();

    // 1) Get search query
    const query = SearchView.getQuery();

    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    ResultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  ResultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  SearchView.addHanderSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
