
import Course from './Layouts/Course/Course';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Layouts/Main';
import AllCourse from './pages/AllCourse/AllCourse';
import Blog from './pages/Blog/Blog';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Faq from './pages/Faq/Faq';
import Home from './pages/Home/Home';
import IndividualCourse from './pages/IndividualCourse/IndividualCourse';
import RightSide from './pages/RightSide/RightSide';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Checkout from './pages/CheckOut/Checkout';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>
        },
        {
          path: "/course",
          element: <Course></Course>,
          children: [
            {
              path: "/course",
              element: <AllCourse></AllCourse>
            },
            {
              path: "/course/:id",
              element: <RightSide></RightSide>,
              loader: ({ params }) => fetch(`https://edu-planner-server.vercel.app/course/${params.id}`)
            },
          ]
        },
        {
          path: "/courses/:id",
          element: <IndividualCourse></IndividualCourse>,
          loader: ({ params }) => fetch(`https://edu-planner-server.vercel.app/courses/${params.id}`)
        },

        {
          path: "/faq",
          element: <Faq></Faq>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoute> <Checkout></Checkout> </PrivateRoute>,
          loader: ({ params }) => fetch(`https://edu-planner-server.vercel.app/checkout/${params.id}`)
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
