import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { createBrowserRouter,
  RouterProvider,} from "react-router-dom";

import GithubCallback from "./pages/GithubCallback";
import LinkedinCallback from "./pages/LinkedinCallback";
import RestPassword from "./pages/RestPassword";
import { Toaster } from "sonner";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import SecureAccount from "./pages/SecureAccount";
const router = createBrowserRouter([
  {
    path: "/github",
    element: <GithubCallback />,
  },
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
    element:

      <SignIn/>
  },

  {
    path: "/forgot_password",
    element:
    <div className="overflow-hidden  h-auto ">
  <ForgotPassword></ForgotPassword>

    </div> ,
  },
  
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
  {
    path:"/linkedin",
    element:<LinkedinCallback></LinkedinCallback>
  },
  {
    path:"/restpassword/:token",
    element:<RestPassword/>
  },
  {
    path:"/secure",
    element:<SecureAccount/>

  }
]); 
 
const App = () => {


  return    (
  
  <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
        <Toaster></Toaster>
  <RouterProvider router={router}/>
  </GoogleOAuthProvider> 
  
  )
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App  />);