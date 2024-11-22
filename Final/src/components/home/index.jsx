import './style.css'
import Header from '../header'
import Sidebar from '../sidebar/sidebar.jsx'
import { Link } from 'react-router-dom'
import	Footer from '../footer/index.jsx'


export default function Home(){
   
    return(

        <>

        <Header/>
        <Sidebar/>
        <h1>Bem vindo ao 
            <strong> Ariândex. </strong></h1>
  

        <h2>Uma pokedex digital para os entusiastas dos <br />pokémons da região de Ariâmis. <br /> 


</h2>

            <div className='btn-pokedex'>

            <Link to = '/Herbkeeper'>  <button>De uma olhada na nossa pokédex &#11166;</button></Link> 
            </div>
            
                <Footer/>
        </>
        


    )


    

}