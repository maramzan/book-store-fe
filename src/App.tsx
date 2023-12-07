import Home from "./pages/home";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Orders from "./pages/orders";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const ProtectedRoute = ({ element, ...rest }: any) => {
  return isAuthenticated() ? element : <Navigate to="/signin" replace={true} />;
};

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/orders"
            element={<ProtectedRoute element={<Orders />} />}
          />
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={1500} />
    </>
  );
};

export default App;
