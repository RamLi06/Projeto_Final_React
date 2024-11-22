import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeP from "../PokemonPage/pokemon.jsx"
import Home from '../../components/home'
import Poke2 from '../PokemonPage/pokemon2.jsx'
import Poke3 from '../PokemonPage/pokemon3.jsx'
import Poke4 from '../PokemonPage/pokemon4.jsx'
import Poke5 from '../PokemonPage/pokemon5.jsx'
import Poke6 from '../PokemonPage/pokemon6.jsx'
import sobre from '../../components/register/index.jsx'

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

                <Route path = "/Flabull"
                Component={Poke4}/>

                <Route path = "/Toadflame"
                Component={Poke5}/>

                <Route path = "/Frokkuna"
                Component={Poke6}/>

              <Route path = "/about"
              Component={sobre}/>

            </Routes>
        </Router>

  )
}

export default App
