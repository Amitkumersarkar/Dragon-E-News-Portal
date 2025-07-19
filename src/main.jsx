import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/ErrorPages/Error';
import Home from './Layouts/HomePages/Home';
import CategoryNews from './Components/CategoryNews';
import AuthLayout from './Layouts/AuthLayout';
import Login from './Pages/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01" />
      }
      ,
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        // declared loader to fetch data and params
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: '/news',
    element: <div>News Layout pages</div>
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <h2>Register</h2>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
