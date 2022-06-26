import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import { GlobalProvider } from './Context';
import Product from './pages/Product';
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
            <Route  path='/' element={<Home />}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/login' element={<Product/>}/>
            <Route path='/register' element={<Product/>}/>
        </Routes>
      </Router>
   </GlobalProvider>
  );
}

export default App;
