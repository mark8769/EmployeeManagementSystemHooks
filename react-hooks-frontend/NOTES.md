## package.json

- Contains dependencies along with version numbers.

- Contains react scripts that you can use (command line scripts)

## public/

- index.html
    -   Only one html file because react is for single place applications (SPA's)
    -   In index.html, there is a div element with id="root". All components will be dynamically 
    rendered in this location.
    -   Typically you never change this file, only adding scripts/libraries to header tag.

- node_modules/
    -   Any packages/libraries we install with npm command will appear here (development purposes)

- index.js
    -   App component is root component.
    -   ReactDOM.render will render component inside index.html

- App.js
    -   Root component


- Intalling apps (into project, sorta like virtual env)

    -   npm install bootstrap --save

    -   Installs it, and adds entry to package.json

    -   import inside index.js file

    -   ```import 'bootstrap/dist/css/bootstrap.min.css';```


## 2 types of components (function and class)

- Class Component

    -   Also called Stateful component

- Functional Component

    -   Also called Stateless component

    -   To use state inside Functional components, we use **React Hooks(useState)**

-   **useState**

    -   Is a hook(function) that allows you to have state variables in functional components.