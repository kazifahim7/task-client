import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './Mainlayout/Root.jsx'
import NotFound from './Pages/NotFound.jsx'
import HOme from './Pages/HOme.jsx'
import LogIn from './Pages/LogIn.jsx'
import Register from './Pages/Register.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import Private from './privateroutes/Private.jsx'
import Dashboard from './Dashboard.jsx/Dashboard.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ManageUser from './admin/ManageUser.jsx'
import Profile from './admin/Profile.jsx'
import History from './admin/History.jsx'

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children:[
      {
        path:'/',
        element:<LogIn></LogIn>
      },
      {
        path:'/signUP',
        element:<Register></Register>
      }
      ,
      {
        path:'/home',
        element: <Private><HOme></HOme></Private>
      }
    ]


    




  },

  {
    path:'/dashboard',
    element: <Private><Dashboard></Dashboard></Private>,
    children:[
      {
        path:'ManageUser',
        element: <Private><ManageUser></ManageUser></Private>
      },
      {
        path:'MyProfile',
        element: <Private><Profile></Profile></Private>
      },
      {
        path:'History',
        element: <Private><History></History></Private>
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>


      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      
    </AuthProvider>
    
  </React.StrictMode>,
)
