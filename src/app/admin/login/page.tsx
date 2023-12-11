"use client";
import Link from "next/link";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
export default function LoginPage() {

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded shadow-md">
        <h1 className="mb-6 text-3xl text-center">Sign In</h1>
        
       
        <form onSubmit={formik.handleSubmit}>
          {/* Use formik.getFieldProps to bind input to Formik */}
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            {...formik.getFieldProps('email')}
            className={`block w-full p-3 rounded border border-gray-300 mb-4 focus:outline-none ${
              formik.touched.email && formik.errors.email ? 'border-red-500' : ''
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className={`block w-full p-3 rounded border border-gray-300 mb-4 focus:outline-none ${
              formik.touched.password && formik.errors.password ? 'border-red-500' : ''
            }`}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none"
          >
            Submit
          </button>
        </form>

       
        <div className="mt-3 text-center">
          <p>
            Don't have an account?
            <Link href="/sign-up" className="text-green-600 ml-1">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
