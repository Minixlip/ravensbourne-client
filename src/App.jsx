//Components / Pages
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Payment from './pages/Payment';
import { useAuthContext } from './hooks/useAuthContext';
//React router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import user

//Creating routes

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/Register',
            element: !user ? <Register /> : <Home />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: '/SignIn',
            element: !user ? <SignIn /> : <Home />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: '/Dashboard',
            element: user ? <Dashboard /> : <SignIn />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: '/Payment',
            element: user ? <Payment /> : <SignIn />,
            errorElement: <div>Error Not Found</div>,
          },
        ])}
      />
    </>
  );
}

export default App;
