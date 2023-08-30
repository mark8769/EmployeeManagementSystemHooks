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


- Using react snippets for functional components

    -   Install react snippt by dsznajder 
    -   type: ```rafc```, then dropdown appears. The guy prefers using ES6, or vanilla javascript arrow functions.
    -   Choose reactArrowFunctionExportComponent from dropdown menu that is created from autocomplete.

-   **const [state, setState] = useState(initialState)**

    -   useState() is nothing but a function that gives stateless components state.
    -   const [employees, setEmployees] = useState([])
        -   Here our state is called employees
        -   We set out employees state with setEmployees function
        -   We define our initial state as an empty array (no employees)

- Another difference between class and functional components.

    -   render() method only available in class components
    -   render() NOT available in functional components.


- Installing Axios library to make REST Api calls.
    -   npm install axios --save

- Create a service class to implement the Service layer in a N-Tier Architecture application

    -   export default new EmployeeService(); 
    -   (Make sure to export an **instance** of the class by using **new** keyword) so that we can use it without having to create an **instance** for each place/file we import it into. 


- **useEffect() hook** allows us to perform side effects(an action) in the function components.
    -   Effect hooks are equivalent to:
    -   **componentDidMount()**
    -   **componentDidUpdate()**
    -   **componentWillUnmount()** lifecycle methods.

    -   More of an explanation from ChatGPT:

    -   In React, the useEffect hook is used to perform side effects in functional components. It allows you to perform operations such as data fetching, subscriptions, or manually changing the DOM after the component has rendered. (ComponentDidMount equivalent)
```
// First argument being passed: Function to run as a side effect.
// Second argument is an array of dependencies. This array specifies which values from the component's scope that effect depends on. The effect will only re-rerun if any of those dependencies change between renders.

useEffect(() => {
    
}, []);
```

The empty array ([]) passed as the second argument indicates that the effect doesn't depend on any values from the component's scope. This means the effect will run once immediately after the initial render of the component and will not be re-run for subsequent renders.


Response Failed because of cors:

Solve: Added crossOrigin annotation in Spring Backend.

Why: Calling from frontend (http://localhost:3000/)
     Backend is on (http://localhost:8080/)



RENDERING ISSUES:
**works**
```
<tbody>
    { 
        employees.map(
            employee => 
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailAddress}</td>
                </tr>
        )
    }
</tbody>
```
```
const example = (param) => {
    // ...
    return value; // Explicit return
};

```
```
const example = (param) => (
    value // Implicit return
);
```
**does not work because I am not explicitly returning anything.... (using curly braces)**
```
<tbody>
    { 
        employees.map(
            employee => { 
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailAddress}</td>
                </tr>
            }
        )
    }
</tbody>
```
