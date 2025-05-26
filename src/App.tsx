import ReactDOM from "react-dom/client";

import { createBrowserRouter,
  RouterProvider,} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const router = createBrowserRouter([
  {
    path: "/sign_up",
    element: 
    
    <div className="overflow-hidden  h-auto ">
      <SignUp></SignUp>
    </div>
     ,
  },
  {
    path: "/sign_in",
    element:<SignIn/> ,
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
  
]); 
 
const App = () => {


  return      <RouterProvider router={router}  /> 
  

}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App  />);