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
import SignUp from './Pages/SignUp';
import AuthProvider from './Provider/AuthProvider';
import NewsDetails from './Pages/NewsDetails';
import PrivateRoutes from './Private Routes/PrivateRoutes';
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
    path: '/news/:id',
    // set private routes and integrate news details page
    element: <PrivateRoutes>
      <NewsDetails></NewsDetails>
    </PrivateRoutes>,
    // loading data
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
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
        path: '/auth/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
