import dayjs from "dayjs";
import Home from "./pages/home";

import relativeTime from "dayjs/plugin/relativeTime";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  Link,
} from "react-router-dom";

dayjs.extend(relativeTime);

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
