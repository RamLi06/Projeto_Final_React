import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../Register";
import PokeP from "../PokemonPage/pokemon.jsx"
import Home from '../../components/home'

function App() {
 
  return (
      <Router>
            <Routes>
                <Route path="/"
                Component={Home}/>

                <Route path="/register" 
                Component={RegisterPage}/>

                <Route path="/jesusteama" 
                Component={PokeP}/>
            </Routes>
        </Router>

  )
}

export default App
