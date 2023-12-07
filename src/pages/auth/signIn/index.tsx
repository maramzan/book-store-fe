import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("clicked");
      signInUser(values);
    },
  });

  const signInUser = async (values: { email: string; password: string }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:3000/auth/login`,
        values
      );
      console.log("response", response);
      if (response.status === 200) {
        await localStorage.setItem("token", response.data.token);
        await localStorage.setItem("userId", response.data.user.id);
        navigate("/");
      }
    } catch (error) {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white p-8 shadow-md rounded-md w-96"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          disabled={Loading}
        >
          Sign In
        </button>
        <div className="text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="text-blue-500 ml-1 font-semibold cursor-pointer hover:underline"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
