way install or setup react
1. use cdn to setup
2. use npm to setup

for installing npm then run cmd % npm init.  npm is package manage that packages and we install in our system
package.json is configuration for npm.
using that cmd create package into folder.

******************************************************bundlers******************************************************
 
Combine and optimize code and dependencies into a deployable format.


bundlers are used to package or bundle app and shift to production.
it bundle the files html,js etc to take care of clean code files before send to production

eg. of bundlers vite, parcel 

package.json is configuration for npm it take care of version and packages
npm manage all the packages that we install in our system, sometimes that packages called as dependencies



dependencies:- like libraries or packa that project need to function eg.. react
Bundlers: These are tools that bundle your project files (JavaScript, CSS, etc.) into a format that's optimized for the web. 

Purpose: To leverage existing code and functionality, reducing the need to write everything from scratch.


there are two type of dependencies 

1. dev dependencies used in development eg.parcel,vite
2. normal dependencies used in production

^,~ 
^ like install minner version
~ like install measure version


****************************************************************************************

package-lock .json 

keep tracking of data
is working as keep lock and keep record of the version of package.json

node module is stored all code of dependencies, packages is like database, it is too huge

this files store all details about node_modules file version and integrity




gitignore folder ingore those files or folder that dont want to post on github like node_modules
whatever you can regenerate dont put it on git

when you install package use npm
when you execute use npx


**************************************************************************************************************

import React from "react";
"react" this means import from node_modules

parcel automatically refresh file by HMR = hot module replacement
it use file watching algorithm
parcel also catching = faster builds
tree shaking - remove unused code files
provide https support == parcel run start --https


when run cmd npx parcel build index.html 
give Error ///  "main": "App.js", when you remove from package.json then it will run

when run this cmd then all files compress and add into the dist folder,
when run program the with help of parcel_catche and dist

compress all multiple files into 3 that files are production ready code for app


"browserlist":[
    "last 2 Chrome version"
]
means only run this code into last 2 version of Chrome not in other browser



**************************************************************************************************************
babel is package/ library
JSX is HTML like structure


const heading = React.createElement("h1", { id: "heading" }, "hello world");      this is how react element using core react

const heading = <h1>hello ReactJs</h1>       //this how create react element using jsx 

const heading = <h1>hello ReactJs</h1>      even before this goes to js engine it is transpile before goes to js engine then js 
                                            engine receive this code that browser is understand
babel takes the jsx and convert it into js engine understand


const Heading = () => {
    <h1>hello ReactJs</h1>
}       //this is function component

how babel convert code it reads one by one charactor <,>,h,e...


inside jsx use {} any JavaScript expression can use

when you use the function(){ return ()} need to implicitly return 
when you use the () => () no need to implicitly return 



when you passing some data dynamically then use props



****** config driven UI ***********

// when need to return value implicitly then use {} otherwise ()

 {resList.map((restaurant) => {
          return <RestaurantContainer resData={restaurant} />;
        })}


 {resList.map((restaurant) => (
          <RestaurantContainer resData={restaurant} />
        ))}

        using this we doing config driven UI



{resList.map((restaurant) => (
          <RestaurantContainer key={restaurant.info.id} resData={restaurant} />
        ))}

        whatever do looping or using map() always give unique (key) 

        key is reserved keyword
key is help to react to uniquely identify the things

when add new card then react know that whichone is old or new by help of key.
when use key then react will not rerender all the things(cards).
if there is no give any key react will dont understand that which one is new card which one is old so he rerender all cards.

**************************************************************************************************************

props:=

when we want to pass data dynamically we use props(properties)

<RestaurantContainer
          resName="QNQ Restaurant"
          cusines="Paneer, North Indian"
          raiting="4.4 Stars"
          dTime="35 minutes"
/>

const RestaurantContainer = (props) => {
  console.log(props);
    <h3 className="res">{props.resName}</h3>
      <h4>{props.cusines}</h4>
      <h4>{props.raiting}</h4>
      <h4>{props. dTime}</h4>
}


************************************ Destructuring *********************************************

const RestaurantContainer = ({resName, cusines}) => {
        <h3 className="res">{resName}</h3>
        <h4>{cusines}</h4>
}

const RestaurantContainer = (props) => {
    const {resName, cusines, raiting, dTime} = props
}

//***************************************************************************************

const RestaurantContainer = (props) => {

  console.log(props);
  const {name} = props
  const {resData} = props
  
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/06c0f220926b259c6a528fc3fc3dabfc"
      />
      <h3 className="res">{resData.info.name}</h3>
      <h4>{name}</h4>
      <h4></h4>
      <h4></h4>
    </div>
  );
};

 <RestaurantContainer resData = {resObj} name = "hey"

//**************************************************************************************

h3 className="res">{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(", ")}</h5>
      <h5>{resData.info.avgRating} ⭐</h5>
      <h5>{resData.info.costForTwo}</h5>
      <h5>{resData.info.sla.slaString}</h5>



resData?.info is a way to safely access the info property of the resData object.

Explanation:
resData: This is your object, which may or may not exist (it could be undefined).

?. (Optional Chaining): This operator checks if resData is defined. If it is, it accesses info. If resData is undefined,
                        it won't try to access info, and the whole expression will return undefined instead of throwing an error.


//********************************************************************************************************************************************************************************

two types of export and imports

export const CDN_URL    // Named exports
import { CDN_URL } from "../utils/constants";
import component from "path"


default export import

export default resList
import resList from "../utils/data";
import {component} from "path"


*************************************************************************************************************************************

there are 2 approches for call APIs

1st  load page =====> API =====> Render ////call api when get then render the component
2nd  load page =====> Render =====> API ======> Re-render   //use this for UX


//********************************************************************************************************************************************************************************
React make dom operation super fast

React will keep your UI sink with datalayer, As soon as datalayer update your UI layer will update,  how will Update by rerendering 

/////  whenever state variable update react triggeres a reconciliation cycle(re-render the component)

HOOKS: use state, it normal js function

//state variable

usestate:::==> whenever state variable will change using set variable react will re-render the component and all the updated values will be there

usestate is used to create state variable

whenever a state variable update react will rerender component

/////*******************************  HOOKS *****************************************************************

WHY USE THE USESTATE AND USEEFFECT

useState:= is used to store and manage values that change over time. Think of it like a way to keep track of user inputs or any data that updates on your page. For example, if you want to track a number, you use useState to store and update that number.

useEffect:= is used to run code at certain times, like when the component first loads or when some value changes. It's like telling React, "When this thing happens, do this action." You can use it to fetch data from an API or update something after a state change.

useEffect::::

it takes 2 arguments useEffect(callback, dependencies Array)

              callback function call after the component has been renders, as soon as render cycle is finished it will call the callback
              body component render then callback function is called

if you have to do something after render the component that will write it into useEffect


Shimmer UI:::::: for best UX
A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. 


********************************************************************************************************************************************


  console.log(<Body />);    //virtual DOM
  it treated as object 



 // if no dependency array => useEffect is called on every component render

  useEffect(()=>{
    console.log("useEffect call");
  })

 // if dependency array is empty = []  => useEffect is called on initial render(once)
  useEffect(()=>{
    console.log("useEffect call");
  }, [])

// if dependency array is [btnName] => useEffect is called everytime when btnName is updated eg. login to logout  

  useEffect(()=>{
    console.log("useEffect call");
  }, [btnName])


//**********************************************************************************************************************************************************

this code for changing value or taking input text from the input box
import React, { useState } from 'react';


In the context of an input box in HTML or a React application, the "value" refers to the current content of that input field,
 which is what the user types in.

function App() {
    // Declare a state variable for the input value
    const [searchTerm, setSearchTerm] = useState('enter'); // Initial value set to 'enter'

    // Function to handle input changes
    const handleChange = (event) => {
        setSearchTerm(event.target.value); // Update the state with the current input value
    };

    return (
        <div>
            <input 
                type="text" 
                className="search-box" 
                value={searchTerm} // Bind the value to the state
                onChange={handleChange} // Update state on change
            />
        </div>
    );
}

export default App;


NOte****
React dont reload the page it just changing component 

//**********************************************************************************************************************************************************

Routing means multiple page can access like 

 {
        path:"/restaurants/:resId"    ==> this called params use for dynamic change done for that use "/:". eg..... path:"/restaurants/:resId/:name"
        element:<ResMenu/>
      },
In the context of defining routes in react-router-dom, the /:paramName syntax is used to define dynamic segments of the URL that can change based on user input or navigation. 

RouterProvider is used to make navigation work in your React app.
 It helps the app know what to show when a user goes to different pages or URLs, like /home, /about, or /contact.

you just need to pass the router prop to the RouterProvider component, and React will handle the rest.

Outlet:===
    Outlet component is primarily used when working with React Router, a popular library for managing routing in single-page applications.
    the Layout component defines a common structure with a header and footer. 
     The Outlet is the placeholder for nested routes, allowing different components to be displayed in the middle, based on the active route.

*************************************************************************************************

Client-Side Routing:
In client-side routing, the routing is handled within the browser using JavaScript, without reloading the page. When you click a link, the URL changes in the address bar,
 but instead of making a request to the server, JavaScript intercepts the request and dynamically updates the content on the page.

How it works: The entire web app is loaded once when the user visits the site, and after that, JavaScript (usually libraries like React Router) manages the content display
 based on the URL changes. The browser doesn’t reload, so the transition between pages feels smoother and faster.
Example: When you navigate from /home to /about on a React app, only the content changes, but the browser doesn't fully reload.

just do network call for APIs

*************************************************************************************************

Server-Side Routing:
In server-side routing, every time you click a link or request a different page, the browser sends a request to the server, and the server sends back the new page content.
 The browser then reloads the entire page with the new data from the server.

How it works: Each page (like /home, /about) corresponds to an actual file or resource on the server. When you navigate to a new page,
the server processes the request and returns the entire HTML for that page.
Example: When you click on a link in a traditional website, like /about, the server sends back the full HTML for the About page, and the browser refreshes.



********************************************************  Dynamic Routing **********************************

why get TypeError

Since the component immediately tries to access resInfo.cards[2].card.card.info.city, it leads to a TypeError:
If resInfo is null or undefined, trying to access nested properties like cards[2] or info will throw a TypeError,
 saying "Cannot read properties of null" or "Cannot destructure property".



TypeError checking why happen this in api Chaining

ANS===== imp NOte************


The condition if (!resInfo || !resInfo.cards) is a safety check to ensure that the resInfo object and its cards array exist before trying to access them. Here's a breakdown:

!resInfo: This checks if resInfo is null or undefined. If resInfo hasn't been set yet (e.g., the API data hasn't been loaded or there was an error fetching it), this part will return true.
 In that case, the Shimmer component (or whatever handling you have) will render to show a loading or error state.

!resInfo.cards: This checks if the cards array inside resInfo exists or is valid. Even if resInfo itself exists, there might be a chance that resInfo.cards is undefined, null, or doesn't contain data due to:

Incomplete API response.
The structure of the API data changing.
Temporary issues with data loading.
Why This Condition Is Important:
If you attempt to access resInfo.cards without confirming that resInfo and resInfo.cards exist, you might run into a TypeError (like Cannot read properties of undefined)
 because you're trying to access a property of something that doesn't exist.

What It Prevents:
This condition prevents your code from trying to access data that may not be available yet (like during initial loading or when there's a network error), 
protecting your app from breaking and allowing you to handle the situation gracefully.

In summary:

!resInfo: Ensures resInfo exists.
!resInfo.cards: Ensures the cards array exists within resInfo. If either of these doesn't exist, the code handles it safely (e.g., by showing a loading state).


********************************************* how Optional Chaining Works ***************************************************

const info = resInfo?.cards?.[2]?.card?.card?.info;
This expression is equivalent to a series of checks that happen automatically. Here’s what happens step by step:

Step-by-Step Behind the Scenes:
resInfo?.:

JavaScript first checks if resInfo is null or undefined.
If resInfo is null or undefined, the entire expression immediately stops, and info is set to undefined.
If resInfo exists, the next part is evaluated.
resInfo?.cards?.:

Now it checks if resInfo.cards exists.
If resInfo.cards is null or undefined, the expression stops, and info becomes undefined.
If resInfo.cards exists, the next part is evaluated.
resInfo?.cards?.[2]?.:

Next, it checks if the array resInfo.cards has an element at index [2].
If resInfo.cards[2] is null or undefined (e.g., if the array doesn't have enough elements), it stops, and info is undefined.
If resInfo.cards[2] exists, it continues to the next step.
resInfo?.cards?.[2]?.card?.:

Now it checks if resInfo.cards[2].card exists.
If resInfo.cards[2].card is null or undefined, the expression stops, and info becomes undefined.
If resInfo.cards[2].card exists, it proceeds.
resInfo?.cards?.[2]?.card?.card?.:

Now it checks if resInfo.cards[2].card.card exists.
If resInfo.cards[2].card.card is null or undefined, the expression stops, and info becomes undefined.
If resInfo.cards[2].card.card exists, it continues.
resInfo?.cards?.[2]?.card?.card?.info:

Finally, if all previous checks have passed, it accesses resInfo.cards[2].card.card.info.


*************************************************** Class Based component ******************************************************

why user Super(prps):
Call the parent class's constructor: If a subclass (child class) needs to use or modify the constructor of its parent class, the super() function is called. It allows you to inherit the properties and behavior defined in the parent class. It must be called before accessing this in the subclass constructor.

Call methods from the parent class: You can use super to access and invoke methods defined in the parent class from within the subclass, enabling you to extend or modify the behavior of the parent class.

Mounting :===
Yes, "mounting" in the context of React refers to the process of rendering a component for the first time in the DOM. When a component is mounted, its lifecycle methods (like componentDidMount in class components or useEffect with an empty dependency array in function components) are called.

loading class based component means i am creating instance of that class.

you're defining a class component UserClass that extends React.Component. By extending React.Component, UserClass inherits functionality from React's base class, allowing it to behave like a React component.

class UserClass extends React.Component {
     render(){
        const {name} = this.props;
        return(
            <div className="user-card">
                <h3>Name: {name} </h3>
                <h3>Location: Mumbai</h3>
                <h5>Contact: rohan@gmail.com</h5>
            </div>
        )
    }
}


for props 
constructor(props){
        super(props);

        console.log(this.props);
    }


An instance of a class component is automatically created when React renders that component. You don’t manually create instances of components in most cases. Here's what happens under the hood:

<UserClass name="John" />


Why Can't You Access props Directly?
If you're inside a class method (like render), you cannot access props directly because it's a property of the instance (this), not a global variable. In class components,
 properties like props and state belong to the instance of the class, so you need to use this to refer to them.

 The props object is an instance property of the class, so you access it with this.

 Class Component as an Instance:

When you create a class component (like UserClass), it is a blueprint for creating component instances.
When you use this class in your JSX (e.g., <UserClass name={"Rohan Sawant"} />), React creates an instance of UserClass.
Accessing Props in Class Components:

In class components, you access props using this.props because props is a property of the instance created from the class.
You need to call super(props) in the constructor to initialize this.props correctly.

 Why No this in Functional Components?
In a functional component like UserClass, there's no instance of the class to refer to. Therefore, this does not exist in the context of a functional component.
The props are provided as an argument to the function itself. So, you directly access them via props (or destructure them) instead of using this.




class UserClass extends React.Component {
  // Constructor is called when an instance of UserClass is created
  constructor(props) {
    super(props); // Call the parent class's constructor (React.Component)

    // Now you can initialize state and access props
    this.state = {
      age: 25,
    };
  }}



Inside the Constructor: When you call super(props) in the constructor, it initializes the parent class (React.Component). This is crucial because it sets up the this context for the class instance.
this.props: After calling super(props), the props passed to the component become available as this.props. This means you can access them throughout the class using this.props.


Class Components:
Props are passed to the constructor via super(props), and then they are available as this.props throughout the class.


class UserClass extends React.Component
├─ constructor(props)
│  └─ super(props) (initializes this.props)
└─ this.props = { name: "Rohan" } (accessible via this.props)

/////IN functio based component::=

        Here, name="Rohan" is passed to UserClass, and you can access it via props.name because props is explicitly defined as a parameter of the function.

How this.props Works in Class Components
Automatic Prop Initialization:

When you use the <UserClass name="Rohan" /> syntax, React creates an instance of UserClass and automatically initializes this.props with the props that were passed (in this case, { name: "Rohan" }).
You don't have to explicitly define a constructor or pass props to this because React takes care of this for you.
Accessing Props:

Inside the class component, you can access the props via this.props in any method, including render().
The line const { name } = this.props; is simply a JavaScript destructuring assignment that extracts the name property from this.props. It’s equivalent to writing const name = this.props.name;.


************* Never update state variable directly
                  count = count + 1

***************************************************** Class Based component Life cycle ****************************************

Inside the class based component, first component is call and create instance then constructor is called with state after that render method is called then after componentDidMount(use for api call) is called then after data is get then re-render the component.

parent-child class cycle:

inside that first call the parent class constructor then call the render method when see there is child class calling <UserClass /> then all life cycle is complete inside the child class constructor => render => componentDidMount class called.
after that return to parent class and then call to componentDidMount

*****************************************************************************************************************************************

Parent-Child Component Lifecycle in Class-Based Components
Parent Component Constructor

The constructor of the parent component is called first. This is where the initial state and props are set up.
Parent Component Render

The render method of the parent component is called. When React sees the child component <UserClass /> being rendered inside the parent, it moves to the child component lifecycle.
Child Component Constructor

The constructor of the child component is called next. This is where the child's state and props are initialized.
Child Component Render

The render method of the child component is called, and React will render the child's JSX on the screen.
Child Component componentDidMount

After the child's JSX is rendered on the screen, the componentDidMount method of the child component is called. This is typically where you make API calls or set up any subscriptions or side effects.
Parent Component componentDidMount

Once the child component has finished mounting and its componentDidMount method has been executed, React moves back to the parent component and calls the componentDidMount method of the parent.
This allows the parent to perform its side effects after ensuring the child has fully mounted.
Summary of the Correct Order:
Parent constructor
Parent render
Child constructor
Child render
Child componentDidMount
Parent componentDidMount
So yes, after the child’s lifecycle is complete (up to componentDidMount), React will return to the parent and call the parent’s componentDidMount. Your understanding is mostly right,
but the key detail is that the child’s componentDidMount completes before the parent’s componentDidMount is called.


*****************************************************************************************************************************************
why we call api using componentDidMount

Guaranteed Mounting
The componentDidMount() method is called after the component has been rendered to the DOM. This ensures that the component is fully mounted (i.e., it exists in the DOM and is visible to the user). By this point, React has completed the initial rendering,
 so the component can safely handle side effects like fetching data without blocking the initial UI render.

Why this matters: Making the API call in componentDidMount() ensures that the component is already present on the screen, so if there's any delay in fetching data (like loading from an API), the user can at least see the initial structure of the component or a loading spinner.

************************************************************************************************************************************************************************************************************************************************************

Fetching Data After the Initial Render
Often, when you fetch data from an API, the component's state needs to be updated with the response (for example, setting fetched data into the state). Changing state inside componentDidMount() after the component has rendered is safe because React will trigger a re-render after the state update.
 This ensures that the component can display updated data once it's fetched, without interfering with the initial render.

Why this matters: The initial render happens before the API call, so you can show a loading state or placeholder content until the data is fetched. Once the API call is complete, you update the state, and React re-renders the component with the fetched data.

************************************************************************************************************************************************************************************************************************************************************

After componentDidMount(), the following happens in a simple flow:

API is called to fetch data from an external source.
Data is received from the API.
State is updated with the new data using setState().
Re-render happens automatically because the state has changed, and React updates the UI to display the fetched data.


/*LIFE cycle OF PARENT AND MULTIPLE CHILD 

when all component will render then call the componentDidMount

- Parent Constructor
- Parent Render call
    - 1st child constructor
    - 1st child render
     
    - 2nd child constructor
    - 2nd child render

    - 1st child componentDidMount
    - 2st child componentDidMount
  
- Parent componentDidMount


****************************** Why write componentDidMount out of the constructor ************************

Lifecycle methods are part of the class's prototype, which means they should be defined directly on the class.
This allows React to call these methods at the appropriate times during the component's lifecycle. When you define them inside the constructor, they are treated as regular functions, not as lifecycle methods.


****************************************** WHY USE AWAIT BEFORE CONVERTING DATA INTO JSON ******************************************************************************************************************************************************************************************************************



data.json() is asynchronous: It takes time to convert the data into JSON format. This process doesn’t happen instantly, especially if the data is coming from an API over the internet.

await pauses the code: By using await, you pause the code execution at that point until data.json() finishes its job. Without await, the code would move on before the JSON conversion is done, leading to errors or incomplete data.

Getting the result: Once the json() function has completed, the await gives you the fully converted JSON data, which you can store in the json variable and use.


 userInfo: {
        id: "id",
        name: "name ",
        img: "photo"
}

use for the after load the page and call constructor then after render method is called then that method set value as given default data in DOM after then getting api data add that data into DOM


Reffer this ********************* https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ ***********************************

after the mounting done re-render does then DOM will update and then componentDidUpdate is called for update the DOM

ComponentWillUnMount =: is called when disapper from page means you move or gone from one (new page) to another page 


************************************************************************************ Imp Notes *********************************************************************************************************


Single Page application means it not change page when redirect to another page like contact it just change the component from one to another

when you call the setIntervel inside useEffect or componentDidMount that intervel is calling by after 1 sec it will not stop when you change page too, when you clear Intervel then it will stop.

useEffect(()=>{
  const timer = setIntervel (()=> {
    console.log("hello react");
  },1000)

  return () => {        // this return is like ComponentWillUnMount when you change your page it will stop
    clearInternal(timer);
    console.log("useeffect return")
  }
}, [])

componentDidMount: For starting things (like data fetching, setting timers, etc.) after a component mounts.
componentWillUnmount: For stopping or cleaning up things before a component is removed from the DOM.


************************************************************************ CUSTOME HOOKS

you create custome hook and write logic for fetching data it will help to remain your code clean and readable and for testing also.



************************************************************************ code call in single file ************************************************************************

this use for make large scalable applications **** ask this quetion in system design interview.

- chunking
- code splitting
- dynamic bundling
- lazy loading
- on demand loading

for this use react := React.lazy() Function
React.lazy() is a function that lets you render a dynamically imported component as a regular component. Instead of importing all the components upfront, it allows you to load them when needed (i.e., lazy load them).

YourComponent will only be loaded when it is actually needed, not during the initial page load.

all the code does not load at once it only come when it will request.

when we build the code then all component code store into a single .js file that might be take more memory and time to load.
So for that as per our requirements we devide code into different (chunking, code splitting, dynamic bundling, lazy loading, on demand loading)
eg. for restaurant call code for only restaurant component, for grocery we call grocery related component when goes to that page or component




We use Suspense with fallback to handle lazy-loaded components in React.
  
Suspense:= delays rendering the component until it's fully loaded.
fallback:= provides a temporary UI (e.g., a loading spinner) during the loading process.



************************************************************************ Tailwind CSS to APPLICATION ************************************************************************

For Install tailwind css 

npm install -D tailwindcss postcss (postcss use for tool transforming css with javascript)
npx tailwindcss init

tailwind.config.js for tailwind
.postcssrc configuration for postcss


parcel use postcss for understand what written inside tailwind.

WHY TAILWIND IS LIGHT WEIGHT
  - When you use classes multiple times in your jsx like m-4 then it just load or include at once time not everytime where we use 
  - If you dont use the shadow in complete code then he will not call not single time




************************************************************************ HIGHER ORDER COMPONENT ************************************************************************

It means takes component inside and returns a component.

input => restaurant card  ==> restaurantcard openlabel
which will take restaurant card as input and return new component which is inhance(open label) restaurant card


  - withOpenLabel: is Higher order function take as input (RestaurantContainer)
      return new function or component this time that have open label, inside that the return component return some Jsx
      this return component it has inhance version with open label

const withOpenLabel = (RestaurantContainer) =>{
    return () =>{
      return (
        <div>
            <RestaurantContainer {...props}/>
        </div>
      )
    }
}

What It Does: The spread operator (...) allows you to pass all properties of the props object as individual props to the RestaurantContainer component.
 This means that if props contains multiple properties (like resData, id, name, etc.), each property will be passed separately to RestaurantContainer.


************************************************************************ CONTROL AND UNCONTROL COMPONENT ************************************************************************
["card"]

managing it self means uncontrol comp

ResCategory is controlled component by it's parent ResMenu.
when he had his own state it was an Uncontrol component, ResMenu don't have control

if ResCategory controlling it self it would have been uncontrol component.
it is relying on its parent tell its what to do 




************************************************************************ HOW THE INDEX VALUE GOES AND ACCOURDION WORK ************************************************************************


Initial Rendering:

When the component first renders, map creates a ResCategory component for each category, assigning a unique setShowIndex function to each one.
 This function is created with a specific index for each category (e.g., () => setShowIndex(0) for the first category, () => setShowIndex(1) for the second, etc.).
No Category Expanded Initially:

The showIndex state is initially null, so all categories are collapsed. The state showIndex controls which category's body is visible.
When a Header is Clicked:

Clicking a header triggers the headerClick function inside that specific ResCategory. The headerClick function calls the stored setShowIndex function for that category.
The setShowIndex function knows which category was clicked because it "remembers" the correct index value due to JavaScript closures.
State is Updated and Rerendered:

The clicked category’s setShowIndex(index) function is executed, updating the showIndex state with the corresponding index.
React re-renders, and the category matching showIndex expands while the others stay collapsed.
Key Point:
Each category "remembers" its unique index due to closures, so React automatically knows which category was clicked without needing to manually extract that information from the click event.



********************************************************** FOR TOGGLE THE ACCORDION **********************************************************
setShowIndex={() => setShowIndex(index === showIndex ? null : index)}


          Scenario 1: Click on Category A
          You click on Category A.
          The setShowIndex function runs:
          javascript
          Copy code
          setShowIndex(index === showIndex ? null : index)
          Since showIndex is null and the index of Category A is 0, the check index === showIndex is false.
          So, it evaluates the expression to index, which is 0.
          setShowIndex(0) sets showIndex to 0, opening Category A.
          Scenario 2: Click on Category A Again
          You click on Category A again.
          The setShowIndex function runs with the current state:
          javascript
          Copy code
          setShowIndex(index === showIndex ? null : index)
          Now, showIndex is 0 (since Category A is open), and index is also 0.
          The check index === showIndex is now true (since 0 === 0).
          It evaluates the expression to null.
          setShowIndex(null) sets showIndex to null, closing Category A.

************************************************************************ Lifting the state up ******************************************************************************************



************************************************************************ Props Drilling ******************************************************************************************

React has one way data flow means :- Parent to childrens like way.

if want to give data to 1 or 2 level it is ok but when we want to pass data in deep level then it getting problem.

ReactContext use for avoid props dealing
    - for creating context create file.
    - const UserContext = createContext({
      loggedInUser : "Default User" });
    - for accessing that context data you do like ::- const data = useContext(UserContext)


*********** *********** *********** *********** *********** *********** *********** *********** *********** 


How can you call and use the Context inside class based component. use as component

 <UserContext.Consumer>
    {({loggedInUser})=> <h4 className="font-bold">{loggedInUser}</h4>}
  </UserContext.Consumer>

Imagine you have a "global storage box" called UserContext where you keep some data (like a user's name or login status).
Consumer is a tool that allows any component to "open the box" and use the data inside it.
Consumer: Any component that uses <UserContext.Consumer> can read the data. Consumer gets the data and uses it in the UI.



How Consumers Work:
A Consumer doesn’t directly give you the context value as a variable. Instead, it expects a function as a child.
This function will receive the current context value as an argument. The reason for this is React's declarative rendering model.

Why a Callback Function?
The callback function:

Provides the Context Value: React automatically calls this function and passes the context data into it.
Handles React Re-Renders: If the context value changes, React re-runs the callback function to ensure the UI stays up-to-date.
Without the function, there would be no way for the Consumer to hand off the context data to your component.



The value prop is predefined and required by the Provider component in React's Context API. When you create a context with createContext, 
it automatically expects the Provider component to accept a value prop to provide the data down to the consumers of that context.

<UserContext.Provider value={{ loggedInUser: userName }}>
    this <UserContext.Provider> provide the data to all child that wrap inside using value prop this provide to child or calling component using useContext.
    only wrap content only access the value

    
Create Context with createContext: The createContext() function is used to create a context object, which contains both a Provider and a Consumer component.
Once you wrap the components with UserContext.Provider, any component within it can access the value without needing to receive it as props. These components consume the context via the useContext hook or UserContext.Consumer.


******************************************************************************************************************************************************************
************************************************************************ Redux ******************************************************************************************
******************************************************************************************************************************************************************

  - install reduxjs/toolkit and react-redux
  - build our store
  - connect our store to our app
  - slice (cartslice)
  - dispatch (action)
  - reducer (fn())
  - selector


Redux store kind of very big object with lot of data, kept in central global space. any component can access this redux store it can write and read.
slices are those we want to create logical creation or part like cart, user

********************* For Write Data *********************

when we add item into cart we cannot do directly insted.
when you click on add button dispatch an (action) and then call reducer fn() and update or modify our slice of redux store. and slice will updated or data will updated and item will added into slice.

********************* For Read Data *********************

when you want to read data from cart slice to header cart use selector and it will give the data 
selector know as subscribing to the store(sink or link). if the data will change inside my store it will automatically change the header cart component. using link or sink selector(subscribing to the store)


# payload 

Purpose: It carries the information or data that the reducer needs to perform an update on the state.
Structure: It can be any type of data — a number, string, object, or even an array, depending on what your reducer needs.

# Why pass store to <Provider>?

The store is the data source that Redux operates on.
By passing the store as a prop, <Provider> ensures that all components in your application can access this central state.
Without the store, Redux would have no state to manage or update.

# working of provider

How does <Provider> work internally?

It uses React's Context API to pass the store down to all components in the component tree.
When you use hooks like useSelector or useDispatch in child components, they internally access the store provided by <Provider>.
Why is <Provider> necessary?

Redux follows a single-source-of-truth philosophy. The store is the single source.
React components need a way to interact with the store to read state or dispatch actions.
<Provider> bridges the gap between the React component tree and the Redux store.

# action and reducer
Yes, (state, action) => { state.items.push(action.payload); } is the reducer.
Yes, addItem is the action creator for the action type "cart/addItem".

reducer is big reducer like container inside of that is slices
reducer: {
        cart: cartReducer,
    }



# test cases 
# Unit testing

we are just testing one component that called unit testing, isolate that component and testing it.


export const sum = (a, b) => {
  return a + b;
};


import { sum } from "../sum";
test("Sum function should calculate the sum of two numbers", ()=>{
    const result = sum(10, 2);

    //assertion
    expect(result).toBe(12);
})

after run cmd 
> npm run test

# babel config

Convert JSX to JavaScript
React code often uses JSX, which is not valid JavaScript. Babel transforms JSX into React.createElement() calls, making it understandable by browsers.


Babel is a tool that converts modern JavaScript (like ES6+) into older versions of JavaScript so that it works in all browsers, even those that don’t support the latest features. It helps developers write modern code without worrying about compatibility.

Presets
Presets in Babel are predefined configurations that bundle together plugins to target specific JavaScript features or environments. For example:

@babel/preset-env: Transforms modern JavaScript into versions supported by older browsers or environments.
@babel/preset-react: Adds support for transforming JSX (used in React) into JavaScript.
@babel/preset-typescript: Supports TypeScript transformations.
In simple terms: Presets are like pre-made recipes that tell Babel what features of your code need to be converted.


const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();


const inputbox = screen.getAllByRole("textbox");

why can't use assertion with the getAllByRole

getAllByRole Returns an Array
The getAllByRole method returns an array of all elements that match the role "textbox". This is because there might be multiple input fields with that role in your rendered DOM.

Since getAllByRole returns an array, you cannot use an assertion like toBeInTheDocument() directly because it expects a single DOM element, not an array.


In Header.test.js file 

need to import redux store because of Usecontext and the Router also because he dont know about this related to react 

# login and logout btn test case
  const loginbutton = screen.getByRole("button",{name: "Login"})
  // const loginbtn = screen.getByText("Login")
  // const cart = screen.getByText("🛒 - 0")

  fireEvent.click(loginbutton)
  const logoutbtn = screen.getByRole("button",{name: "Logout"})

  expect(logoutbtn).toBeInTheDocument();

# testing on props

how to test props and check card

 render(<RestaurantContainer resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();

  need to use mockdata


# how fetch use in test with mock fn()
What the code does:
You are mocking (faking) the fetch function using Jest.

fetch is normally used to get data from a server, but in tests, you don’t want to actually make a network request.
Instead, you make a mock fetch that returns fake data immediately without contacting the server.
Key components of the code:
1. global.fetch = jest.fn()
What it does:
This replaces the real fetch function with a mock function created by Jest.
Why:
It lets you control what fetch does during your tests so you can test your code without needing a real API.
2. Mocking a resolved Promise:
javascript
Copy code
Promise.resolve({
    json: () => {
        return Promise.resolve(data);
    }
});
What happens here:
The fetch mock returns a Promise that resolves immediately.
The resolved value is an object with a json() method.
3. The json() method:
In a real fetch call, the json() method converts the server response into JavaScript objects.
You are faking this behavior by:
Adding a json() method to the returned object.
Making json() return another Promise that resolves with the fake data.
Putting it all together:
When you call fetch() in your test, instead of making a real network request, it does this:
Returns a Promise that resolves with a fake response object.
This fake response object has a json() method.
Calling json() on the fake response gives another Promise that resolves to the data.
Example in action:
Suppose the data variable is:

javascript
Copy code
const data = { message: "Hello, world!" };
If you call fetch in your test:

javascript
Copy code
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(result => console.log(result));
Here’s what happens:

The mocked fetch immediately returns the fake response.
Calling response.json() gives a Promise that resolves to { message: "Hello, world!" }.
The final output is:
css
Copy code
{ message: "Hello, world!" }
Why this is useful in testing:
No real API calls: You avoid making actual HTTP requests during tests, which is faster and more reliable.
Custom responses: You can control what fetch returns, simulating various scenarios (e.g., successful responses, errors).
Isolated testing: Tests focus on your code, not on whether the API is working.
Code summary with example usage:
Here’s the full flow in an example:

javascript
Copy code
const data = { message: "Hello, world!" };

// Mock the fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(data)
    });
});

// Using the mock in a test
fetch("https://api.example.com/data")
    .then(response => response.json()) // Simulates calling the server and getting JSON
    .then(result => console.log(result)); // Output: { message: "Hello, world!" }
Let me know if you'd like further clarification or a deeper dive into any part!






































