//React route
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AnnonceDetails from './pages/AnnonceDetails';
import Header from './components/Header';
import "./App.css";




function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/A-propos' element = {<About/>}></Route>
      <Route path='*' element = {<NotFound/>}></Route>
      <Route path='/Annonce/:id'  element = {<AnnonceDetails/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
