import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";





// const h1 = React.createElement("h1",{ id: "heading"}, "hello React")    ///react element at the end is js object

//this react element create object that then render to an Dom html structure

/*
const heading = React.createElement("div",{ id: "parent"},[ 
    React.createElement("div",{ id: "child"}, 
    [React.createElement("h1",{}, "hello from React h1"),
         React.createElement("h2",{}, "hello from React h2")]
    ),
    React.createElement("div",{ id: "child"}, 
        [React.createElement("h1",{}, "hello from React h1"),
             React.createElement("h2",{}, "hello from React h2")]
        )
     ]
 )  
*/

//  ReactElement(Object) => HTML(browser understands)

// console.log(heading); //object   // it will give react element (object) react el is normal js object
// const root = ReactDOM.createRoot(document.querySelector('#root'));   //assign a rooot inside the react  //ReactDOM is a package provided by React that is responsible for interacting with the DOM.
// root.render(heading)

// put reactelement object into html then browser understand it and prints it on page

/*

render creates a virtual structure of what your page should look like.
It compares this structure with what's already on the page.
It adds or updates only the needed elements in the actual DOM, making the changes appear to users.


React.createElement:
Purpose: It creates an object that represents a React element (like a heading, button, or component).
Action: It doesn’t directly create a DOM node but instead creates an object describing the element and its properties (like type, children, and attributes).


ReactDOM.createRoot:
Purpose: It sets up a root in the DOM where React will manage its content.
Action: It creates a "portal" or a controlled environment where React will render its elements.


root.render():
Purpose: It takes the React element (the object created by createElement) and converts it into real DOM nodes, updating the actual HTML structure.
Action: It uses the object information to create the actual HTML structure in the browser.

This line converts the object (element) into an actual DOM node (<h1>Hello React!</h1>) and displays it on the page.
*/

// React.createElement => ReactElement(Object) => when we render this object onto DOM it becomes HTML Element(render)
//react Element

//ReactDOM takes this object and convert it into HTML and push it to browser

/* const heading = React.createElement(
     "h1", 
     { id: "heading" }, 
      "hello world"
);     

this is how create react element using core react
*/

//babel is converting jsx into React.createElement now react will understand this code
// jsx => React.createElement =>ReactElement-js Object => HTMLElement(render) render it into browser

//jsx:= jsx is just syntax
//jsx(transpiled it before goes to js engine) - parcel - babel

// const heading = <h1 tabIndex="1">hello ReactJs</h1>;         //when you write multiple lines then wraped it into () beca babel need to understand where it started and ended
//this how create react element using jsx

// console.log(heading);

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(heading);

//React Component
/*

 * class based component - OLD
 * Function based component  - NEW          Function return some jsx that will become Function based component
  

     : it is normal js function and return some JSX
 */

//react element
// const headingCom = <h1>hello from React jsssssss</h1>;

//react functional component
// both are same

//react functional component use capital latter (HeadingComp)
// const HeadingComp = function(){
//      return <h1>hello from React js</h1>;
// }

// const HeadingComp = function () {
//   return(
//   <h1>
//      hello from React js
// </h1>
//      )
// };

// const number = 10;
// const HeadingComp2 = () => (
//   <div>
//      {number}
//      {HeadingCom} {/* react element  */}
//     <HeadingComp />
//     <h1 className="heading">hello from React js 2</h1>
//     {/* component composition means one comp inside another*/}
//   </div>
// );

// console.log(heading);

/*

 * Header
 *   - logo
 *   - nav item
 * Body
 *   - search
 *   - RestaurantContainer-card
 *      - img
 *      - name, star rating , cuisines, delevery time
 * Footer
 *   - copyright
 *   - Links
 *   - Address
 *   - Contact
 
 */

/*
 * ********* Note whenever use css, js it should added into { } object *********
 */

//not using keys (not acceptable) <<< index as key <<<< unique key (best practice).

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {
  
  return (
    <div className="app">
      <Header />
      < Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<ResMenu/>
      },
    ],
    errorElement: <Error/>
  },
  
])


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter}/>);  //The router={appRouter} part passes the appRouter (which defines the routes of your app) as a prop to RouterProvider.
                                                    //The RouterProvider uses appRouter to handle which component (like AppLayout, About, or Contact) should be displayed when a user navigates to a certain path (like /, /about, /contact).
//this syntax babel understand

