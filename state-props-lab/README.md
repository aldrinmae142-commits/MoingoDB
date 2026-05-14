# State and Props Lab

This React lab demonstrates the difference between state and props and how to pass data between components.

## Overview

The lab includes:

- `Counter.js`: a stateful component that manages its own `count` state with the `useState` hook.
- `Greeting.js`: a stateless component that receives a `name` prop and displays a personalized greeting.
- `Display.js`: a presentational component that receives a `value` prop and displays the current counter value.
- `App.js`: the parent component that uses `useState` to manage shared counter state, passes props to child components, and handles state updates.

## Learning Objectives

- Understand the difference between state and props in React.
- Use the `useState` hook inside functional components.
- Pass data from parent to child components using props.
- Update the UI dynamically as state changes.
- Create reusable components that accept props.

## Project Structure

- `package.json`
- `public/index.html`
- `src/index.js`
- `src/App.js`
- `src/Counter.js`
- `src/Greeting.js`
- `src/Display.js`
- `README.md`

## Setup and Run

From the `state-props-lab` directory, run:

```bash
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

## Expected Behavior

- The page displays two greetings: `Hello, Alice!` and `Hello, Bob!`.
- The counter shows `My Counter: 0` initially.
- Clicking `Increment` increases the counter.
- Clicking `Decrement` decreases the counter.
- The display component shows the current shared counter value.

## Notes

This lab is built using a simple React setup and does not require additional dependencies beyond the default React tooling.
