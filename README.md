# Forkify Recipe Application

This is a recipe application built as part of a JavaScript course. It allows users to search for over a million recipes, view the details, bookmark their favorites, and even create and upload their own. The application is built using a Model-View-Controller (MVC) architecture.

**Live Demo:** [forkify-safetycrew.netlify.app](https://forkify-safetycrew.netlify.app)

![Forkify Architecture](https://raw.githubusercontent.com/safety-crew/JonasIO-Forkify-App/main/architecture-forkify.png)

## Features

- **Search Recipes**: Search for recipes from a database of over 1,000,000+ recipes.
- **View Recipe Details**: Display recipe details including ingredients, cooking time, servings, and directions.
- **Adjust Servings**: Dynamically change the ingredient quantities based on the number of servings.
- **Bookmark Recipes**: Save your favorite recipes for easy access later. Bookmarks are stored in the browser's local storage.
- **Create Your Own Recipe**: Users can create and upload their own recipes, which will be added to their bookmarks and marked as user-generated.
- **Pagination**: Navigate through search results with a simple pagination system.

## Project Structure & Technologies

- **JavaScript (ES6+)**: The core logic of the application, organized into modules.
- **Parcel**: Module bundler for building the project.
- **Sass**: CSS preprocessor for styling.
- **MVC Architecture**: The project follows the Model-View-Controller pattern to organize the code.

### `model.js`

This module manages the application's state and business logic.

- **`state`**: An object that holds the current recipe, search results, and bookmarks.
- **`loadRecipe()`**: Fetches a single recipe from the API.
- **`loadSearchResults()`**: Fetches search results from the API.
- **`updateServings()`**: Updates ingredient quantities for a new number of servings.
- **`addBookmark()` / `deleteBookmark()`**: Manages the bookmarks array, which is persisted to `localStorage`.
- **`uploadRecipe()`**: Formats and sends user-created recipe data to the API.

### `controller.js`

This module acts as the intermediary between the model and the views. It contains the main application logic and event handlers.

- **`controlRecipes()`**: Handles loading and rendering a recipe when the URL hash changes or the page loads.
- **`controlSearchResults()`**: Gets the search query, loads the results from the model, and renders them.
- **`controlPagination()`**: Renders a new page of search results.
- **`controlServings()`**: Updates the servings in the model and re-renders the recipe view.
- **`controlAddBookmark()`**: Adds or removes the current recipe from the bookmarks.
- **`controlAddRecipe()`**: Takes user input from the form, sends it to the model for uploading, and renders the new recipe.
- **`init()`**: Connects the handler functions in the controller to the event listeners in the views.

### `Views/`

These modules are responsible for everything related to the DOM. They render data and listen for user interactions.

- **`View.js`**: A parent class that contains common methods inherited by other views, such as `render()`, `update()`, `renderSpinner()`, and `renderError()`. The `update()` method provides an efficient way to update the DOM by only changing the elements and attributes that have been modified.
- **`recipeView.js`**: Manages the main recipe display area.
- **`searchView.js`**: Manages the search input field and form submission.
- **`resultsView.js`**: Manages the list of search results.
- **`paginationView.js`**: Manages the pagination buttons.
- **`bookmarksView.js`**: Manages the list of bookmarked recipes.
- **`addRecipeView.js`**: Manages the "Add Recipe" modal window and form submission.
- **`previewView.js`**: A helper view for rendering individual recipe previews in the results and bookmarks lists.

### `helpers.js` & `config.js`

- **`config.js`**: Stores constant variables for the application, such as the API URL, API key, and results per page.
- **`helpers.js`**: Contains helper functions, most notably an `AJAX()` function that handles all API requests and includes a timeout to prevent long-running requests.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/safety-crew/JonasIO-Forkify-App.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd JonasIO-Forkify-App
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Start the development server:
    ```sh
    npm start
    ```
    This will open the project in your default browser.

## Acknowledgements

- This project is based on the "Forkify" project from the Udemy course by Jonas Schmedtmann.
- Recipe data is provided by the [Forkify API](https://forkify-api.herokuapp.com/).
