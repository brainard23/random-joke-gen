# React Interview Task

## Setup Instructions

Install dependencies:

```sh
npm install
```

Install styled-components:

```sh
npm install styled-components
```

Start the development server:

```sh
npm run dev
```

## Task Description

### Goal:

Create a simple React component that:

-   Fetches a random joke from the API:
    Endpoint: https://official-joke-api.appspot.com/random_joke
-   Displays the setup (question) immediately.
-   Hides the punchline initially and reveals it when a button is clicked.
-   Has a button to fetch a new joke.
-   Uses styled-components for styling.

### Requirements:

-   Use React (TypeScript).
-   Use styled-components for styling.
-   Fetch the joke using fetch() or axios inside a useEffect.
-   Use useState to manage the joke and visibility of the punchline.
-   Ensure the UI updates when fetching a new joke.

## Hints & Tips:

-   Store the joke data in state (useState).
-   Use useEffect to fetch a joke when the component mounts.
-   Handle loading state when fetching a joke.
-   Add basic styling using styled-components.
-   Use event handlers to show/hide the punchline and fetch a new joke.

## Example UI Functionality:

1. Initial State

-   "What has ears but cannot hear?" (Displayed)
-   [Show Punchline] (Button)

2. After Clicking "Show Punchline"

-   "What has ears but cannot hear?"
-   "A field of corn." (Now visible)

3. After Clicking "Get New Joke"

-   Fetches a new joke and resets punchline visibility.

## Bonus (Optional)

-   Show a loading state when fetching a new joke.
-   Add a simple fade-in effect when the punchline appears.
-   Style the buttons and layout nicely.
