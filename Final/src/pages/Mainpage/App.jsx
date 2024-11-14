import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeP from "../PokemonPage/pokemon.jsx"
import Home from '../../components/home'
import Poke2 from '../PokemonPage/pokemon2.jsx'
import Poke3 from '../PokemonPage/pokemon3.jsx'


function App() {
 
  return (
      <Router>
            <Routes>
                <Route path="/"
                Component={Home}/>

                <Route path="/Herbkeeper" 
                Component={PokeP}/>

                <Route path = "/Grasstalker"
                Component={Poke2}/>

                <Route path = "/Foresterror"
                Component={Poke3}/>

            </Routes>
        </Router>

  )
}

export default App
