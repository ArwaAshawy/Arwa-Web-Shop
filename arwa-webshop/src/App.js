import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import { GlobalProvider } from './Context';
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
            <Route  path='/' element={<Home />}/>
        </Routes>
      </Router>
   </GlobalProvider>
  );
}

export default App;
