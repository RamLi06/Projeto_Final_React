import search from '../assets/images/procurar.png'
import menu from '../assets/images/Menu.png'
import './style.css'

export default function Header(){

      return(
      <>
      <div className='header'>
       <button><img src={menu} alt="" /></button> 
      <header>
        <h2>Bopedia</h2>
      </header>
            <img id='search-icon' src={search} alt="" />
        
            <input type="text" placeholder=' Search'/>

        </div>

      </>

)
      }