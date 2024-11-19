import Header from "../../components/header"
import femea from '../../components/assets/images/femea.png'
import macho from '../../components/assets/images/Macho.png'
import poke from '../../components/assets/images/Frokuna.png'
import agua from '../../components/assets/images/agua.png'
import fogo from '../../components/assets/images/fogo.png'
import pedra from '../../components/assets/images/pedra.png'
import terra from '../../components/assets/images/ground.png'
import Sidebar from '../../components/sidebar/sidebar.jsx'
import dark from '../../components/assets/images/dark.png'
import fada from '../../components/assets/images/fada.png'
import ghost from '../../components/assets/images/ghost.png'


import {useNavigate } from 'react-router-dom'

export default function PokemonPage2() {

    const Navigate = useNavigate();

    return (
        <>
        <Header/>
        <Sidebar/>
        <div className='poke'>
            <button onClick={() => Navigate(-1)}>&#11164;Toadflame #05</button>
            <button>Shrimprill #07 &#11166;</button>

           <h3 id='title-p'>Frokkuna #06</h3> 
           <img src={poke} alt="" />

        </div>
           <div className='descrição'>
            <h4>Frokkuna, o pokémon rei das chamas, todas as almas atormentadas de suas batalhas passadas tomam forma em suas chamas as deixando azuladas, misteriosamente criam um par de braços adicionais.  </h4>
    

           </div>
            <div id='gender'>
           <button><img id='macho' src={macho} /></button> <button> <img id='femea' src={femea} /></button>
          
           </div>

           <div className='status'>

            <p>Tipo:</p>
            <img id='type' src={fogo} />
            <img id='type' src={ghost} />

            <p id='weak'>Fraquezas:</p>
            <img id='type' src={agua} />
            <img id='type' src={terra} />
            <img id='type' src={pedra} />
            <img id='type' src={dark} />
            <img id='type' src={fada} />

           </div>



        </>
    );
}