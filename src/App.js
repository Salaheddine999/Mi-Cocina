import Navbar from './components/layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {RecepiesProvider} from "./context/RecepiesContext"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Recipe from './components/pages/Recipe';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';
import RandomRecipe from './components/pages/RandomRecipe';
import SearchRecipe from './components/pages/SearchRecipe';

function App() {
  return (
    <>
    <RecepiesProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/recipe/:id' element={<Recipe/>} />
          <Route path='/random' element={<RandomRecipe/>} />
          <Route path='/search' element={<SearchRecipe/>} />
        </Routes>
        <Footer/>
      </BrowserRouter> 
      <ToastContainer/>
    </RecepiesProvider> 
    </>
  );
}

export default App;
