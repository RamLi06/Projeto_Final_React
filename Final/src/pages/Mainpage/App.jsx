import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../Register";
import PokeP from "../PokemonPage/pokemon.jsx"
import Home from '../../components/home'
import Poke2 from '../PokemonPage2/index.jsx'

function App() {
 
  return (
      <Router>
            <Routes>
                <Route path="/"
                Component={Home}/>

                <Route path="/register" 
                Component={RegisterPage}/>

                <Route path="/pokemon" 
                Component={PokeP}/>

                <Route path = "/Grasstalker"
                Component={Poke2}/>
            </Routes>
        </Router>

  )
}

export default App
