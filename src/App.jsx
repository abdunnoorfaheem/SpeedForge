import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Service from './pages/Service'
import RootLayout from './components/RootLayout'
import FeaturedCar from './pages/FeaturedCar'


function App() {
  

  let myRoute=createBrowserRouter(createRoutesFromElements((
    <Route element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/featuredCar' element={<FeaturedCar/>}/>
    </Route>
  )))

  return (
    <>
     <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
