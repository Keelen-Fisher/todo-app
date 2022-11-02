# Context API Week

## ***Lab 31: Context API PHASE 1***

## To Do List Manager Phase 1: Incorporate configuration settings to the application

- In this phase, we’ll be adding some top-level settings for the application, so that the user can make some display choices that the app will use by default.

## Basics/Before you begin

    - Create a new React app named todo-app
    - Delete the existing src directory
    - Paste in the src folder from the lab/starter-code
    - npm install any missing dependencies by comparing package.json files. Note: installing most - recent versions is ideal.
    - npm start and confirm that the application loads in the browser
    - Create an EMPTY GitHub Repository named todo-app
    - Follow GitHub instructions labeled “…or push an existing repository from the command line”

## Phase 1 Requirements

- In Phase 1, we’re going to perform some refactoring of the To Do application as built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

  - Style the application using the Mantine Component API{target:_blank}

  - Properly modularize the application into separate components

  - Implement the Context API to make some basic application settings available to components

    - How many To Do Items to show at once
    - Hide completed items

## Technical Requirements / Notes

- Implement the React context API for defining settings across the entire application.
  - Create a context for managing application display settings and provide this at the application level.
  - Display or Hide completed items (boolean).
  - Number of items to display per screen (number).
  - Default sort field (string).
  - Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.

- Consume and utilize context values throughout your components
  - Show a maximum of a certain number of items per screen in the `<List />` component
    - Use the Mantine Pagination component to let the users navigate a long list of items
  - Hide completed items in the list (the ability to show will be added in a later lab)

### Pagination Notes

- Only display the first n items in the list, where n is the number to display per screen in your settings context.
  - If you have more than n items in the list, the Pagination Component will add a button that, when clicked, will replace the list with the next n items in the list.
  - the Pagination Component will also manage the previous (<) and next(>) arrow buttons upon correct implementation.

### Application Structure (Proposed)

    ├── public
    ├── src
    │   ├── __tests__
    │   │   │   └── empty for now...
    │   ├── Components
    │   │   ├── AddForm
    │   │   │   └── AddForm.jsx
    │   │   ├── Footer
    │   │   │   └── Footer.jsx
    │   │   ├── Header
    │   │   │   └── Header.jsx
    │   │   ├── List
    │   │   │   └── List.jsx
    │   │   ├── ToDo
    │   │   │   └── ToDo.jsx
    │   │   │   └── styles.scss  
    │   ├── Context
    │   │   ├── Settings
    │   │   │   └── Settings.jsx
    │   │   │   └── settings.test.js
    │   ├── hooks
    │   │   └── form.js
    │   ├── App.js
    │   ├── index.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

## Expected React Output, via UML

![UML](public/assets/UML%20Rough%20Draft%20for%20Lab%2031.png)

## Deployment

[Linked to Deployed Site (Using SandBox)](https://codesandbox.io/p/github/Keelen-Fisher/todo-app/main?file=%2FREADME.md)

## [Tests](./src/__tests__/)

## [PR Link](https://github.com/Keelen-Fisher/todo-app/pull/1)

## Resources

- List modularized with the Help from Class 32 Lecture

- Example of the complete React App. [Link](https://todo-401-js.netlify.app/)

- Mantine UI Recourses [HOME](https://mantine.dev/pages/getting-started/)

- [Mantine Grid](https://mantine.dev/core/grid/)

- [Mantine Card](https://mantine.dev/core/card/)

- [Mantine TextInput](https://mantine.dev/core/text-input/)

- [Mantine Slider](https://mantine.dev/core/slider/)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## ***Lab 32: Context API -Behaviors PHASE 2***

## To Do List Manager Phase 2: Incorporate configuration settings to the application

- In this phase, we’ll be adding an editor so that users can save their preferences for the application, allowing them to change some of the default behaviors

## Basics/ Before you begin

    - Continue to work in your GitHub Repository named todo-app
    - Create and work in a new branch for today called ‘context-methods’

## Phase 2 Requirements

- In Phase 2, we’re going to extend the functionality of our application by allowing the user to make some decisions on how they would like the application to function. Specifically, we’ll let them make changes to 2 settings.

  - Implement the Context API to make some basic application settings available to components
    - How many To Do Items to show at once
    - Whether or not to show completed items

  - Provide the users with a form where they can change the values for those settings
    - This should be given in the form of a new component, perhaps linked to from the main navigation
    - ***Hint***: Use Browser Router to create the page/route/component for this
    - Once settings are updated, render the updated settings to the right of the “form”. Consider using *Grid*, *Card*, and *When* components.

  - Save the user preferences in Local Storage
  - Retrieve their preferences from Local Storage and apply them to the application on startup

## Technical Requirements/ Notes

- Extend your context provider to include all of the following features:
  - Create a context for managing application settings and provide this at the application level.
  - Display or Hide completed items (boolean).
  - Number of items to display per screen (number).
  - Default sort field (string).
  - Create a function in your context that saves user preferences (for the above) to local storage.
  - Implement a useEffect() (or componentDidMount()) in your context to read from local storage 
  and set the values for those 2 state properties on application load.

> Note: You will need to stringify your state prior to saving to local storage, and parse it when you retrieve it.

- Consume and utilize Context values throughout your components:
  - Show a maximum of a certain number of items per screen in the `<List />` component.
    - Properly implement the Mantine Pagination component functionality to let the users navigate a long list of items with the correct number of tasks showing per “page”.
  - Hide or show completed items in the list.

### Application's Structure (Proposed)

    ├── public
    ├── src
    │   ├── __tests__
    │   │   │   └── empty for now...
    │   ├── Components
    │   │   ├── AddForm
    │   │   │   └── AddForm.jsx
    │   │   ├── Footer
    │   │   │   └── Footer.jsx
    │   │   ├── Header
    │   │   │   └── Header.jsx
    │   │   ├── List
    │   │   │   └── List.jsx
    │   │   ├── SettingsForm
    │   │   │   └── SettingsForm.jsx
    │   │   ├── Todo
    │   │   │   └── ToDo.jsx
    │   │   │   └── styles.scss  
    │   ├── Context
    │   │   ├── Settings
    │   │   │   └── Settings.jsx
    │   │   │   └── settings.test.js
    │   ├── hooks
    │   │   └── form.js
    │   ├── App.js
    │   ├── index.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

## Expected React Output  UML

![UML](public/assets/UML%20Rough%20Draft%20for%20Lab%2032.png)

## Deployed Site

[Linked to Deployed Site (Using SandBox)](https://codesandbox.io/p/github/Keelen-Fisher/todo-app/main?file=%2FREADME.md)

## [Test Files](./src/__tests__/)

## [PR Link]()

## Resources List

- Example of the complete React App. [Link](https://todo-401-js.netlify.app/)

- Mantine UI Recourses [HOME](https://mantine.dev/pages/getting-started/)

- Mantine Switch [Link](https://mantine.dev/core/switch/)

-
