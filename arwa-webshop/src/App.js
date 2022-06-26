import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import { GlobalProvider } from './Context';
import Product from './pages/Product';
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login';
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
            <Route  path='/' element={<Home />}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/register' element={<Register/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
   </GlobalProvider>
  );
}

export default App;
