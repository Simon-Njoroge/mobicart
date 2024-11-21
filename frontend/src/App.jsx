import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Homepage from './pages/Homepage';
function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>
  }
 ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
