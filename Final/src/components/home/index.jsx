import './style.css'
import planta from '../assets/images/Planta1.png'


export default function Home(){
   
    return(

        <>
        
        <h1>Bem vindo ao 
            <strong> Brapédia. </strong></h1>
  

        <h2>Uma pokedex digital para os entusiastas dos <br />pokémons da região de Braf. <br /> 
            <div className='home-pokemon'>
        <img src={planta} alt="" />
</div>

</h2>

            <div className='btn-pokedex'>

                <button>De uma olhada na nossa pokedex &#11166;</button>
            </div>
        </>
        


    )


    

}