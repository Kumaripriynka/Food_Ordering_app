# My Project: Food Ordering app

Rough sketch of app
*Header
- logo
- Nav Items

*Body
- Search
- RestaurantContainer
   -restaurantcard
     - Img
     - Name of Restaurant, Star Ratings,quizine etc.

*Footer
- Copyright
-links
-address
-contact

******* Here we have same name of food card with same data in RestaurantCard, how we can dynamically change the data of the ReactComponent,so here the concept of props are coming. We can undestand this as a just normal  javascript arguments passing trough a function. i.e props (short for "properties") are like inputs we give to a React component to customize it. They allow you to pass data from a parent component to a child component.

**** Props is an Object


 *****Config Driven Ui: Controling the Ui using given data or given config is known as the config Driven UI,and config comes from the Backend.

 ***Our website is driven by the data ,that is known as config driven ui.

###Today's Learning : So when we want  dynamically passing few data to a component, we can pass it through the props, and we can pass any number of props we wish to.

@@@@ Two types of Export/import
1. Default Export/Import
export default Component;
import Component from "path"

2. Named Export/Import
export const Component;
import {component} from 'path';

<!-- When we use default export and named export? : when we have to export only one component then we use dafault export import but when we use multiple component to export , we use named export/import -->

Q. can we use  default and named export together in a code?
for ex:  export  const Header ={
  some piece of code
}
export default Header;

Ans: No, we cannot have both a named export and a default export for the same Header component in this way. This will cause an export conflict.

 ##State Variable in React: 
 In React, a state variable is a special variable used to store and manage dynamic data within a component. When the state changes, React automatically re-renders the component to reflect the new values. It is a super powerful variable. 

# Hooks in React:
 Hooks are special functions in React that allow functional components to manage state and side effects without needing class components. They were introduced in React 16.8 to simplify component logic and make code more reusable.

Common React Hooks: useState(),useEffect()

1. useState (Manages State in Functional Components):
Used to declare state variables inside functional components.
Syntax: 
const [state, setState] = useState(initialValue);

2. useEffect (Handles Side Effects):
Runs code after rendering, useful for data fetching, subscriptions, or manually updating the DOM.

<!-- Note: Whenever a state variable changes, react re-render its component -->

<!-- Virtual Dom : it is a representation of actual dom ,and actual doms are the tags(<div>,h1,h2) -->

# Reconciliation Algorithm in React:
In React 16 a new algorithm came out to update the Dom,which is known as Reconciliation ,and after react 16 it is known as "React Fiber" and React Fiber is the new way of finding the div and update the dom.

# Reconciliation:
 is the process of updating the UI efficiently when a component’s state or props change. Instead of re-rendering everything, React compares the previous Virtual DOM with the new Virtual DOM and updates only the changed parts in the real DOM.

🔹 Steps in Reconciliation:

1. React creates a new Virtual DOM after a state/prop change.
2. It compares the new Virtual DOM with the old one (Diffing Algorithm).
3. React identifies differences and updates only those elements in the real DOM.

# what is Diff Algorithm?
The Diff Algorithm is how React efficiently compares the new Virtual DOM with the old one to determine the minimal number of updates needed.

🔹 Key Optimizations in the Diff Algorithm:

🔹 Rule 1: Elements with Different Types Cause Full Re-Renders
If the element type changes, React destroys the old element and creates a new one.
✅ Example:
function App({ isTitle }) {
  return isTitle ? <h1>Title</h1> : <p>Paragraph</p>;
}
📌 If isTitle changes from true to false, React removes <h1> and creates <p>, instead of modifying <h1>.

🔹 Rule 2: Elements with the Same Type Get Updated in Place
If the element type remains the same, React updates only the changed attributes or text.
✅ Example:
function User({ name }) {
  return <h1>{name}</h1>;
}
📌 If name changes from "John" to "Doe", React only updates the text inside <h1>, not the entire element.

# What Are Microservices?
Microservices, or the microservices architecture, is a design approach in software development where an application is built as a collection of small, independent services that communicate with each other via APIs. Each microservice handles a specific business function and can be developed, deployed, and scaled independently.

# Key Features of Microservices
✅ Independence – Each service runs separately and can be updated without affecting others.
✅ Scalability – Services can be scaled individually based on demand.
✅ Resilience – If one service fails, others continue working.
✅ Technology Agnostic – Different services can use different technologies (languages, databases, etc.).
✅ Faster Development & Deployment – Teams can work on different services simultaneously.

# How Microservices Work?
Client Request → Sent to API Gateway (optional)
API Gateway → Directs the request to the appropriate microservice
Microservices → Process data and interact with databases or external services
Response → Sent back to the client
Example of Microservices in an E-commerce App
A traditional monolithic e-commerce app might have:

User Management
Product Catalog
Cart & Checkout
Payment Processing
Order Management
In a microservices architecture, each of these features becomes a separate service, running independently.

Technologies Used in Microservices
Programming Languages: Node.js, Java, Python, Go
Databases: MySQL, PostgreSQL, MongoDB, Redis
API Communication: REST, GraphQL, gRPC
Service Discovery: Eureka, Consul
Containerization & Orchestration: Docker, Kubernetes
Message Brokers: Kafka, RabbitMQ
Pros & Cons of Microservices
✅ Advantages:

Easier maintenance and updates
Better scalability and fault tolerance
Faster development cycles
❌ Challenges:

Increased complexity in managing multiple services
Network latency due to inter-service communication
Requires a solid DevOps strategy

# What is useEffect Hook in React?
The useEffect hook is used to handle side effects in functional components. Side effects include:

Fetching data from an API
Updating the DOM
Subscribing to events
Managing timers
It runs after the component renders and can be configured to run only when specific values change.

# Syntax of useEffect:
useEffect(() => {
  // Side effect logic here

  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]); // Dependency array (optional)

#The first argument is a callback function that runs after rendering.
#The return function inside the callback handles cleanup (if needed).
#The dependency array controls when the effect runs:
>>[] → Runs only on mount.
>>[dep1, dep2] → Runs when listed dependencies change.
>>No array → Runs after every render.

useEffect(() => {
  console.log("useEffect function called")
}, []);

# Conditional Rendering in React 🚀
Conditional rendering in React allows you to dynamically display components based on certain conditions (like loading state, authentication, or user input).

 # Shimmer UI in React ✨
Shimmer UI is a loading skeleton effect used to enhance the user experience while content is being fetched. Instead of displaying a blank screen, it shows a placeholder UI with a shimmering effect, making the page look more responsive.

# Why Use Shimmer UI?
 ✔ Improves UX – Provides a visual cue that content is loading.
 ✔ Faster Perception of Speed – Makes the page feel faster, even if data is still loading.
 ✔ Better Than Spinners – Unlike loaders/spinners, shimmer placeholders give an idea of layout structure.


 <!-- NOTE : If we want to define local variable in a Component ,we use useState -->

 # Why Do We Use State Variables in React? 🚀
In React, state variables allow components to store, update, and manage dynamic data. Unlike regular variables, state changes trigger re-renders, ensuring the UI updates automatically.

# Key Reasons to Use State Variables
✅ Reactivity – When the state changes, React automatically re-renders the component.
✅ Component Data Storage – Holds dynamic data (e.g., form inputs, API data, toggle states).
✅ Preserves Data Between Renders – Unlike regular variables, state values persist between renders.
✅ Triggers UI Updates – Ensures UI stays in sync with application logic.

<!-- Whenever state variables update, react triggered reconcialation cycle(re-rendering components)-->

<!-- NOTE: In useEffect hooks  dependency array is necessary, if not, useEffect will be called after every render of component  -->
   <!-- if dependency array is empty =[], useEffect called on initial render(just once)
  if dependency array is btnNameReact, useEffect called everytime btnName  is updated -->
useEffect{()=>{
  console.log("usseEffect called);
}};

<!-- NOTE: never create StateVariable outside of the function component otherwise it will through an error, it is used for creating local state variable inside a function component. -->

<!-- ********** Always use these hooks on the top inside the component ,means on the starting of the component function ********-->

<!-- Don't use useState call inside conditional statement like if,else,for loops and also not inside a function since it is valid in javaScript but never use these in React -->

<!-- SO the conclusion is here that always use these hooks on the higher order of the functional component -->

# Routing Configuration in React:
In React, routing is managed using the react-router-dom library, which enables navigation between different components or pages in a Single Page Application (SPA) without a full page reload.

# What is RouterProvider in react-router-dom?
RouterProvider is a component in react-router-dom (v6.4+) that connects your application to the router. It allows you to manage navigation, handle routing logic, and use features like loaders, actions, and error handling.

# Why Use RouterProvider?
-> It enables data-aware routing (loaders & actions).
-> It provides a centralized way to define routes.
-> It supports error handling with errorElement.
-> It works with createBrowserRouter or createMemoryRouter.

# useRouteError Hook in React Router:
useRouteError, it is a hook provided by React Router to handle errors that occur in route loaders or actions.

# Usage of useRouteError:
useRouteError is typically used inside an error boundary route to catch and display errors from loaders, actions, or rendering failures.

 # What is a Child Route in react-router-dom?
A child route (also called a nested route) is a route that is rendered inside a parent route. This allows us to build layouts where a common parent component wraps multiple child components.

# Why Use Child Routes?
Helps organize related routes inside a parent.
Enables layouts with shared components (e.g., navigation bar, sidebar).
Keeps routing logic clean and structured.

# What is <Outlet /> in react-router-dom?
<Outlet /> is a special component in react-router-dom that serves as a placeholder for rendering child routes inside a parent route. It allows nested routes to display their content inside the parent component.

# Why Use <Outlet />?
It enables nested routing by rendering child components.
Helps in creating layouts where common UI elements (like headers, sidebars) remain visible while child content changes.
Keeps our application organized and modular.

 # What is the <Link> Component in react-router-dom?
The <Link> component in react-router-dom is used to navigate between pages without reloading the entire app. It replaces the traditional <a> tag, ensuring smooth client-side navigation.

# Why Use <Link> Instead of <a>?

Feature	                <Link>	                                <a> (Anchor Tag)
Page Reload	            ❌ No reload (SPA behavior)	           ✅ Causes full page reload
Performance	            ✅ Fast navigation	                     ❌ Slower due to reload
History Management	    ✅ Works with React Router history	     ❌ Reload loses state
Client-Side Navigation	✅ Yes	                                 ❌ No

# What is an SPA (Single Page Application)?
A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates content without requiring full page reloads. This makes the app faster, smoother, and more interactive, as only necessary data is fetched and updated.

# How Does an SPA Work?
1. Initial Load: The browser loads a single HTML file (usually index.html) along with JavaScript and CSS.
2. Client-Side Routing: Navigation happens via JavaScript (e.g., using React Router) instead of traditional page reloads.
3. API Calls: Data is fetched dynamically from a backend (via REST APIs or GraphQL) and displayed without reloading the page.
4. State Management: SPAs often use state management libraries like Redux, Context API, or Zustand to manage app state.

# two types of routing in web applications:
1. Server side routing:
2. Client side routing:

# Client-Side Routing (CSR)
-> Navigation is handled entirely in the browser using JavaScript.
-> The page does not reload, and only the necessary components update dynamically.
-> Used in Single Page Applications (SPAs).
-> Example: react-router-dom in React.

# How Client-Side Routing Works
-> Initial Load: The browser downloads the full JavaScript bundle.
-> Navigation Handling: React intercepts route changes and updates the content dynamically.
-> No Page Refresh: The browser URL changes, but the server is not requested again.

✅ Pros:
->Faster navigation (no full-page reloads).
-> Better user experience (smooth transitions).
-> Reduced server load (server is not reloaded on every request).

❌ Cons:
-> SEO issues (since content is loaded dynamically, search engines may struggle to index it).
-> Slower initial load (the whole JavaScript bundle is downloaded before rendering).
-> More JavaScript required (heavy reliance on the client).

# Server-Side Routing (SSR):
-> The server processes every request and sends a new HTML page to the browser.
-> The page reloads completely when navigating between routes.
-> Used in traditional web applications and Next.js SSR apps.

# How Server-Side Routing Works
-> User Requests a Page: The browser sends a request to the server.
-> Server Generates a Response: The server processes the request and returns a complete HTML page.
-> Full Page Reload: The browser replaces the old page with the new one.

✅ Pros:
->  Better SEO (search engines get fully rendered HTML).
-> Faster initial load (HTML is ready before reaching the client).
-> No need for extra JavaScript to render content.

❌ Cons:
-> Slower navigation (each request requires a full page reload).
-> More server load (server processes each request).
-> Can be complex to implement compared to CSR.
