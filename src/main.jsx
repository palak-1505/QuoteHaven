import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'

import About from './components/About/About.jsx'
import Quotes from './components/Quotes/Quotes.jsx'
import Garden from './components/Garden/Garden.jsx'


const router = createBrowserRouter([
  {
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:'quotes',
      element:<Quotes/>
    },
    {
      path:"about",
      element:<About/>
    },{
      path:"garden",
      element:<Garden/>
    }
    
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
