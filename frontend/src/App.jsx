import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Homepage from './pages/Homepage';
import CartPage from './pages/cartPage';
import Learnmore from './components/learnmore';
import TvsPage from './pages/tvsPage';
import PhonesPage from './pages/phonesPage';
import OfficePage from './pages/officePage';
import HealthPage from './pages/healthPage';
import FashionPage from './pages/fashionPage';
import ComputingPage from './pages/computingPage';
import BabyPage from './pages/babyPage';
import AppliancesPage from './pages/appliancesPage';
import SuperPage from './pages/superPage';
import Searched from './components/searched';
import Signup from './components/signup';
import Login from './components/login';
function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>
  },
  {
    path:'/cart',
    element: <CartPage/>
  },{
    path:'/learnmore/:id',
    element:<Learnmore/>
  },
  {
    path:'/Phones&Tablets',
    element:<PhonesPage/>
  },
  {
    path:'/TVs&Audio',
    element:<TvsPage/>
  },
  {
    path:'/Appliances',
    element:<AppliancesPage/>
  },
  {
    path:'/Health&Beauty',
    element:<HealthPage/>
  },
  {
    path:'/Home&Office',
    element:<OfficePage/>
  },
  {
    path:'/Fashion',
    element:<FashionPage/>
  },
  {
    path:'/Computing',
    element:<ComputingPage/>
  },
  {
    path:'/Supermarket',
    element:<SuperPage/>
  },
  {
    path:'/BabyProducts',
    element:<BabyPage/>
  },
  {
    path:'/searched',
    element:<Searched/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Login/>
  }
 ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
