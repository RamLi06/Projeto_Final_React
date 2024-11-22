import Header from "../../components/header"
import femea from '../../components/assets/images/femea.png'
import macho from '../../components/assets/images/Macho.png'
import poke from '../../components/assets/images/Flabull.png'
import agua from '../../components/assets/images/agua.png'
import fogo from '../../components/assets/images/fogo.png'
import pedra from '../../components/assets/images/pedra.png'
import terra from '../../components/assets/images/ground.png'
import { Link } from "react-router-dom"
import Sidebar from '../../components/sidebar/sidebar.jsx'



export default function PokemonPage2() {

    

    return (
        <>
        <Header/>
        <Sidebar/>
        <div className='poke'>
           <Link to = '/Foresterror'><button>&#11164;Foresterror #03</button></Link> 
          <Link to = '/Toadflame'><button>Toadflame #05 &#11166;</button></Link>

           <h3 id='title-p'>Flambull #04</h3> 
           <img src={poke} alt="" />

        </div>
           <div className='descrição'>
            <h4>Flambull, o pokémon anfibio flamejante, Flabull habita pequenos campos em torno de vulcões, ao contrário do que muitos podem achar Flabull não se da nem um pouco bem com água, suas chamas são tao quentes que assumem a forma de um "cachecol" de fogo ao redor de seu pescoço.</h4>
    

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