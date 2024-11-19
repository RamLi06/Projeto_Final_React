import Header from "../../components/header"
import femea from '../../components/assets/images/femea.png'
import macho from '../../components/assets/images/Macho.png'
import poke from '../../components/assets/images/Forest.png'
import grass from '../../components/assets/images/grama.png'
import gelo from '../../components/assets/images/gelo.png'
import fogo from '../../components/assets/images/fogo.png'
import voador from '../../components/assets/images/voador.png'
import venenoso from '../../components/assets/images/poison.png'
import inseto from '../../components/assets/images/inseto.png'
import dark from '../../components/assets/images/dark.png'
import luta from '../../components/assets/images/luta.png'
import { Link } from "react-router-dom"
import Sidebar from '../../components/sidebar/sidebar.jsx'

import {useNavigate } from 'react-router-dom'

export default function PokemonPage2() {

    const Navigate = useNavigate();

    return (
        <>
        <Header/>
        <Sidebar/>
        <div className='poke'>
            <button onClick={() => Navigate(-1)}>&#11164;Grasstalker #02</button>
         <Link to = '/Flabull'><button>Flambull #03 &#11166;</button></Link>  

           <h3 id='title-p'>Foresterror #03</h3> 
           <img src={poke} alt="" />

        </div>
           <div className='descrição'>
            <h4>Foresterror emerge das sombras quando a floresta está em perigo ou quando sente uma presença invasora. Sua aparência intimidadora é marcada por galhos retorcidos que formam uma espécie de coroa, e suas folhas agora escuras exalam uma energia ameaçadora. Seu Bulbo aflora em uma forma muito mais violenta, diferente de suas pré evoluções. <br /> O olhar de Foresterror é hipnotizante, e dizem que quem o encara sente o peso de seus pecados contra o meio ambiente. </h4>
    

           </div>
            <div id='gender'>
           <button><img id='macho' src={macho} /></button> <button> <img id='femea' src={femea} /></button>
          
           </div>

           <div className='status'>

            <p>Tipo:</p>
            <img id='type' src={grass} />
            <img id='type' src={dark} />

            <p id='weak'>Fraquezas:</p>
            <img id='type' src={gelo} />
            <img id='type' src={fogo} />
            <img id='type' src={voador} />
            <img id='type' src={venenoso} />
            <img id='type' src={inseto} />
            <img id='type' src={luta} />



           </div>



        </>
    );
}