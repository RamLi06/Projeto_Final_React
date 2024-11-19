import Header from "../../components/header"
import femea from '../../components/assets/images/femea.png'
import macho from '../../components/assets/images/Macho.png'
import poke from '../../components/assets/images/Toadflame.png'
import agua from '../../components/assets/images/agua.png'
import fogo from '../../components/assets/images/fogo.png'
import pedra from '../../components/assets/images/pedra.png'
import terra from '../../components/assets/images/ground.png'
import Sidebar from '../../components/sidebar/sidebar.jsx'



import {useNavigate } from 'react-router-dom'

export default function PokemonPage2() {

    const Navigate = useNavigate();

    return (
        <>
        <Header/>
        <Sidebar/>
        <div className='poke'>
            <button onClick={() => Navigate(-1)}>&#11164;Flambull #04</button>
            <button>Frokuna #06 &#11166;</button>

           <h3 id='title-p'>Toadflame #05</h3> 
           <img src={poke} alt="" />

        </div>
           <div className='descrição'>
            <h4>Toadflame, o pokémon incendiário, Toadflame vaga por vulcões lutando contra outros pokémons de tipo fogo para absorver suas chamas de uma forma brutal, essas lutas ocasionam em diversas cicatrizes em seus corpos. </h4>
    

           </div>
            <div id='gender'>
           <button><img id='macho' src={macho} /></button> <button> <img id='femea' src={femea} /></button>
          
           </div>

           <div className='status'>

            <p>Tipo:</p>
            <img id='type' src={fogo} />

            <p id='weak'>Fraquezas:</p>
            <img id='type' src={agua} />
            <img id='type' src={terra} />
            <img id='type' src={pedra} />



           </div>



        </>
    );
}