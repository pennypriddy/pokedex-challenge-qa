# The Challenge

This repository is the source code for an incomplete, pretend "Pokédex" web app. It's a code challenge, the challenge being to finish the web app by implementing a few last minute major features in the UI and API.

# Getting Started

## Cloning the Repo

You'll want to start by cloning the repo. (Instructions on cloning repos can be found here: https://help.github.com/en/articles/cloning-a-repository.) Next, you'll want to make sure Node is installed (v18). Now you're ready to run the UI and API locally!

## Running the UI/API

To run the UI and the API locally, just run `npm run start` or `npm run dev` from both the `api` and `ui` folders. Both dev servers should automatically talk to each other.

_Note: In order to avoid any discrepancies running the dev servers, please make sure you're using Node 18._

## The Tasks

1. Build a test plan (20 minutes)
- This app is still in its MVP state, but we will be building out more features and would like to make a plan for testing it. The app's current capabilities are
   - User can view a list of pokemon
   - A user can filter the list by name, type, and weakness (a pokemon can be 1-2 types and be weak to one or multiple types)
   - A user can click on a pokemon and see its details including type, weakness, and evolutionary line (the pokemon it evolves from and to) if applicable
   - A user can click on a pokemon in the evolutionary line and go to the selected pokemon's page

   How should we build out the test plan for this app? Where do we need:
   - E2E tests
   - Integration tests
   - API tests
   - Unit testing
   - Other kinds of tests (if any)

2. Implement tests for filtering and selecting a pokemon (25 minutes) - Create a test that follows the following happy path
   1. Filter to only show pokemon who are groound type
   2. Add an additional filter to change the weakness to fighting
   3. Click on Graveler
   4. Confirm it is a ground type that evolves from Geodude and evolves in to Golem


1. Implement Searching on the UI & API

- The user should be able to type in a search query in a search box and get fuzzy matches based on the pokemon name. For example, if a user types in "charzirard" into the search box, the search results should show Charizard, but also Charmander, Charmeleon, and perhaps even others based on fuzzy matching of the text.
- Build out a search box that makes search queries to the API
- Implement a fuzzy search endpoint in the API. (You can use a pre-made library to solve this, but be ready to defend your decision of which library.)

2. Implement filtering on the UI & API

- The user should be able to filter the list of pokemon by their types and weaknesses. Multiple filters should be able to be applied. Multiple filters should follow the "AND" paradigm vs the "OR" paradigm, meaning additional filters should narrow down results, not expand them. For example, if a user chooses the "FLYING" type and the "FIRE" type, you should filter down the pokemon to only those with **both** the "FLYING" and "FIRE" types. Charizard would show up in this list, but Charmander would not, because it does not have the "FLYING" type. Combining type filters with weakness filters should operate in the same way, narrowing down your search results.
- Build out filter checkboxes or dropdowns or menus that add filter arguments to your request to the API
- Implement filtering on the pokemon list endpoint within the API, handling both `types` and `weaknesses` filters

# External Libraries

You are welcome to use external libraries to complete the challenge. However, please be prepared to defend your decisions on which you utilize.

# Tips

Here's some tips you might find handy:

- If you use an IDE like VS Code or Atom, install the ESLint and Prettier extensions. They help development a _lot!_
- Don't focus too much on UX or pretty design. Focus more on meeting the acceptance criteria and writing clean code.
- We're fans of the Functional Programming paradigm. As you code, thinking about how you can make your functions pure and avoid mutating things.
