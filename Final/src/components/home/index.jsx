import './style.css'
import planta from '../assets/images/Planta1.png'
import Header from '../header'
import Sidebar from '../sidebar/sidebar.jsx'
import Footer from '../footer'


export default function Home(){
   
    return(

        <>

        <Header/>
        <Sidebar/>
        <h1>Bem vindo ao 
            <strong> Ariândex. </strong></h1>
  

        <h2>Uma pokedex digital para os entusiastas dos <br />pokémons da região de Arianis. <br /> 
            <div className='home-pokemon'>
        <img src={planta} alt="" />
</div>

</h2>

            <div className='btn-pokedex'>

                <button>De uma olhada na nossa pokédex &#11166;</button>
            </div>

            <Footer/>
        </>
        


    )


    

}