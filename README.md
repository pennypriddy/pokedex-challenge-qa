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
- This app is still in its MVP state. We would like to make a plan for testing it. The app's current capabilities are
   - User can view a list of pokemon
   - A user can filter the list by name, type, and weakness (a pokemon can be 1-2 types and be weak to one or multiple types)
   - A user can click on a pokemon and see its details including type, weakness, and evolutionary line (the pokemon it evolves from and to) if applicable
   - A user can click on a pokemon in the evolutionary line and go to the selected pokemon's page

   Please describe (at a high level, we can go deeper as time permits) a test automation plan for this app. Please feel free ask any questions that could help you make decisions and consider:
   - E2E tests
   - Integration tests
   - API tests
   - Unit testing
   - Other kinds of tests (if any)

2. Implement tests for filtering and selecting a pokemon (25 minutes) - Create a test that follows the following happy path. The feature code might need additional test identifiers. 
   1. Filter to only show pokemon who are ground type
   2. Add an additional filter to change the weakness to fighting
   3. Click on Graveler
   4. Confirm it is a ground type that evolves from Geodude and evolves in to Golem

Note: This test is set up for playwright. You are free to use whichever test framework you like, but using another framework will take some of the 20 minutes available for this exercise, so if you'd like to do that, it might be better to use pseudocode.

# External Libraries

You are welcome to use external libraries to complete the challenge. However, please be prepared to defend your decisions on which you utilize.

# Tips

Here's some tips you might find handy:

- If you use an IDE like VS Code or Atom, install the ESLint and Prettier extensions. They help development a _lot!_
- Don't focus too much on UX or pretty design. Focus more on meeting the acceptance criteria and writing clean code.
- We're fans of the Functional Programming paradigm. As you code, thinking about how you can make your functions pure and avoid mutating things.
