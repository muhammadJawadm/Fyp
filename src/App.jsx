import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NewsDetail from './Components/Dashboard/NewsDetail';
import { UserProvider } from './Components/Context/UserContext.jsx';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Stocksnews from './Components/Dashboard/Stocksnews';
import Feed from './Components/Dashboard/Feed';
import NewsList from './Components/Dashboard/Newslist';
import UploadNews from './Components/Dashboard/UploadNews.jsx';
import Userprofile from './Components/Dashboard/Userprofile.jsx';
import Chat from './Components/Dashboard/chat.jsx';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');  // Check if token exists in localStorage
};

// Create a protected route wrapper
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/Login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Register',
    element: <Register /> 
  },
  {
    path: '/Dashboard',
    element: <Dashboard /> // Protected route
  },
  {
    path: '/newsDetail/:id',
    element: <ProtectedRoute><NewsDetail /></ProtectedRoute>
  },
  {
    path: '/Stocknews',
    element: <Stocksnews />
  },
  {
    path: '/Newslist',
    element: <NewsList />
  },
  {
    path: '/UploadNews',
    element: <ProtectedRoute><UploadNews /></ProtectedRoute> // Protected route
  },
  {
    path: '/Userprofile',
    element: <ProtectedRoute><Userprofile /></ProtectedRoute> // Protected route
  },
  {
    path: '/chat',
    element: <Chat />
  }
]);

function App() {    
  return (
    <UserProvider>
      <div>
        App
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  );
}

export default App;
