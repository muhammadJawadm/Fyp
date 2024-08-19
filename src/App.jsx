import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NewsDetail from './Components/Dashboard/NewsDetail';
import { UserProvider } from './Components/Context/UserContext.jsx';
import {
    createBrowserRouter,
    Router,
    RouterProvider
} from 'react-router-dom'
import Stocksnews from './Components/Dashboard/Stocksnews';
import Feed from './Components/Dashboard/Feed';
import NewsList from './Components/Dashboard/Newslist';
import UploadNews from './Components/Dashboard/UploadNews.jsx';
import Userprofile from './Components/Dashboard/Userprofile.jsx';

const router = createBrowserRouter([
    {
    path : '/',
    element: <div><Register></Register></div>
    },
    {
    path : '/Login',
    element: <div><Login></Login></div>
    },
    {
    path:'/Register',
    element:<div><Register></Register></div> 
    },
    {
    path : '/Dashboard',
    element: <div><Dashboard></Dashboard></div>
    },
    {
    path: "/newsDetail/:id",
    element: <div><NewsDetail /></div>
    },
    {
    path:'/Stocknews',
    element:<div><Stocksnews></Stocksnews></div>
    },
    {
    path:'/Newslist',
    element:<div><NewsList></NewsList></div>
    },
    {
        path:'/UploadNews',
        element: <div><UploadNews></UploadNews></div>
    },
    {
        path:'/Userprofile',
        element: <div><Userprofile></Userprofile></div>
    }
    
])

function App() {    
return (
    <UserProvider>
<div>
App
<RouterProvider router ={router}/>
</div>
</UserProvider>
)
}

export default App
