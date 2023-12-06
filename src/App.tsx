import Home from "./pages/home";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
