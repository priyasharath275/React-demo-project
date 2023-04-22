import React ,{lazy  , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/index.js";
import Body from "./src/components/Body/index.js";
import {createBrowserRouter,RouterProvider ,Outlet} from 'react-router-dom'
import { Provider } from "react-redux";
import Error from "./src/components/Error.js";
import Menu from "./src/components/Restaraunt/Retro-Menu.js";
import Instamart from "./src/components/instamart/index.js";
import store from "./src/utils/store.js";
import Cart from "./src/components/Body/Cart.js";

const AboutUs = lazy(() => import("./src/components/Body/AboutUs"))
const MyApp = () => (
  <div>
    <Provider store={store}>
    <Header />
   <Outlet/>
    </Provider>
   
  </div>
);

// const heading3 =() => (  <h3>Hello Everyone 3</h3>);

// const headings2 = React.createElement("h1", {
//     id: "title",
//     key: "title2"
// }, "Namastae React 2");
// const div = React.createElement("div", {
//     id: "div-title"
// }, [Headings1, headings2

// ]);

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<MyApp/>,
        errorElement:<Error/>,
        children : [
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<Suspense><AboutUs/></Suspense>,
            },
            {
                path:"/restaurant/:id",
                element:<Menu/>,
            },
             {
                path:"/instamart",
                element:<Suspense><Instamart/></Suspense>,
            },
            {
                path:"/cart",
                element:<Suspense><Cart/></Suspense>,
            },
        ]
    },
    
   
])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>);


