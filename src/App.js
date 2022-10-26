
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './pages/shared/NavBar/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }





      ]
    },
    {
      path: "*",
      element: <div>Error........</div>
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
