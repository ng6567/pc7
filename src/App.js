//Importation fichier React router dom
import { Route, Routes } from "react-router-dom";

//Importation des pages/fichiers
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AnnonceDetails from "./pages/AnnonceDetails";
import Header from "./components/Header";
import "./App.css";

// Agencement de notre application et traitement du routing

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/A-propos" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/Annonce/:id" element={<AnnonceDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App; //Importation fichier package webpack : lie les fichiers entre eux : interprétation des navigateurs
