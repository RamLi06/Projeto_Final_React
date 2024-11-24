import Header from "../../components/header"
import femea from '../../components/assets/images/femea.png'
import macho from '../../components/assets/images/Macho.png'
import poke from '../../components/assets/images/Calamita.png'
import agua from '../../components/assets/images/agua.png'
import fogo from '../../components/assets/images/fogo.png'
import pedra from '../../components/assets/images/pedra.png'
import terra from '../../components/assets/images/ground.png'
import Sidebar from '../../components/sidebar/sidebar.jsx'
import dark from '../../components/assets/images/dark.png'
import fada from '../../components/assets/images/fada.png'
import ghost from '../../components/assets/images/ghost.png'
import psy from '../../components/assets/images/psy.png'
import { Link } from "react-router-dom"

export default function PokemonPage2() {

    

    return (
        <>
        <Header/>
        <Sidebar/>
        <div className='poke'>
           <Link to = '/Frokkuna'><button>&#11164;Frokuma #05</button></Link> 
            <button>Acabou &#11166;</button>

           <h3 id='title-p'>Calamitas #0?</h3> 
           <img src={poke} alt="" />

        </div>
           <div className='descrição'>
            <h4>Calamitas, o pokémon ████████████, o conhecimento sobre ele é quase nulo, lendas dizem que Calamitas habita em tempestades cósmicas no centro do universo onde continua selado desde então.(vários dados foram expurgados para manter a segurança de quem █████████ ███. )  </h4>
    

           </div>
            <div id='gender'>
           <button><img id='macho' src={macho} /></button> <button> <img id='femea' src={femea} /></button>
          
           </div>

           <div className='status'>

            <p>Tipo:</p>
            <img id='type' src={psy} />

            <p id='weak'>Fraquezas:</p>
            <img id='type' src={dark} />
            <img id='type' src={ghost} />

           </div>



        </>
    );
}