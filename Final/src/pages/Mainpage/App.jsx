import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../Register";
import PokeP from "../PokemonPage/pokemon.jsx"
import Home from '../../components/home'
import Poke2 from '../PokemonPage2/index.jsx'
import Poke3 from '../PokemonPage3/index.jsx'

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

                <Route path = "/Foresterror"
                Component={Poke3}/>

            </Routes>
        </Router>

  )
}

export default App
