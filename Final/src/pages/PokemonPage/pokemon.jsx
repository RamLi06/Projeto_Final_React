import './style.css'
import Header from "../../components/header"
import femea from '../../components/assets/images/femea.png'
import macho from '../../components/assets/images/Macho.png'
import poke from '../../components/assets/images/Planta1.png'
import grass from '../../components/assets/images/grama.png'
import gelo from '../../components/assets/images/gelo.png'
import fogo from '../../components/assets/images/fogo.png'
import voador from '../../components/assets/images/voador.png'
import venenoso from '../../components/assets/images/poison.png'
import inseto from '../../components/assets/images/inseto.png'
import Sidebar from '../../components/sidebar/sidebar.jsx'

import { Link } from 'react-router-dom'


export default function PokemonPage() {
    return (
        <>
        <Header/>
        <Sidebar/>
        <div className='poke'>
          <button>&#11164; Ultimo Pokemon</button>
         <Link to ='/Grasstalker'><button>Grasstalker #02 &#11166;</button></Link> 

           <h3 id='title-p'>HerbKeeper #01</h3> 
           <img src={poke} alt="" />

        </div>

           <div className='descrição'>
            <h4>HerbKeeper, o Pokémon observador, é conhecido por guardar os segredos das florestas antigas.  Dizem que ele se comunica com as plantas e desaparece silenciosamente entre as sombras das árvores. Fun fact: Sempre o confundem com um tal de Jonathan</h4>
    

           </div>
            <div id='gender'>
           <button><img id='macho' src={macho} /></button> <button> <img id='femea' src={femea} /></button>
          
           </div>

           <div className='status'>

            <p>Tipo:</p>
            <img id='type' src={grass} />

            <p id='weak'>Fraquezas:</p>
            <img id='type' src={fogo} />
            <img id='type' src={gelo} />
            <img id='type' src={voador} />
            <img id='type' src={venenoso} />
            <img id='type' src={inseto} />


           </div>



        </>
    );
}