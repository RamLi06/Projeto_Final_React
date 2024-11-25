import './style.css'
import Header from '../header/index.jsx'
import profile from '../assets/images/mage.jfif'
import reactLogo from '../assets/images/react.svg'


export default function Register(){


    return(
    
    <>
    <Header/>
    
    <a href = "https://github.com/RamLi06">  <img id='profile' src={profile}  /></a>
    <div className='register'>
       
        <p>Apenas uma pagina de fã criada por puro humor e para um projeto pessoal meu.</p>
       

        <p>Obrigado.</p>

        <img src={reactLogo} className="logo react"/>
        <div className='footer'>
  
        </div>
        
    </div>
    
    </>
    )
}
