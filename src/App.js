
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Orders from './components/Orders/Orders';
import Main from './components/Main/Main';


function App() {
  const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => fetch('tshirt.json'),
          element: <Home></Home>
        },
        {
          path: '/orders', element: <Orders></Orders>
        }

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
