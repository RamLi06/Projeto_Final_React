import './style.css'
import Header from "../../components/header"
import femea from '../../components/assets/images/femea.png'
import macho from '../../components/assets/images/Macho.png'
import poke from '../../components/assets/images/Planta1.png'
import grass from '../../components/assets/images/grass.png'
export default function PokemonPage() {
    return (
        <>
        <Header/>
        <div className='poke'>
            <button>&#11164; Ultimo Pokemon</button>
            <button>Grasstalker #02 &#11166;</button>

           <h3 id='title-p'>HerbKeeper #01</h3> 
           <img src={poke} alt="" />

        </div>
           <div className='descrição'>
            <h4>HerbKeeper é conhecido por guardar os segredos das florestas antigas. <br /> Dizem que ele se comunica com as plantas e desaparece silenciosamente entre as sombras das árvores.</h4>
    

           </div>
            <div id='gender'>
           <button><img id='macho' src={macho} /></button> <button> <img id='femea' src={femea} /></button>
          
           </div>

           <div className='status'>

            <p>Tipo:</p>
            <img id='type' src={grass} />

            <p id='weak'>Fraquezas:</p>
            <img id='type' src={grass} />

           </div>



        </>
    );
}