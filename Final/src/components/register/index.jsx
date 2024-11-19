import './style.css'
import Footer from '../footer/index.jsx'
import Header from '../header/index.jsx'
export default function Register(){


    return(
    
    <>
    <Header/>
    <div className='register'>
        <form id='register-form'>
            <div className='form-register'> 
        <h2>Login</h2>

        <input type="text" placeholder='Username' required />
        <input type='email' placeholder='Email' required/>
        <input type='password' placeholder='Password' required/>

        <button id='confirm-btn' type='submit'>Submit</button>
        </div>
        </form>

        <div className='footer'></div>

       
        <Footer/>
        
        
    </div>
    
    </>
    )
}
/* const routes = [
    "/Herbkeeper",
    "/Grasstalker",
    "/Foresterror",
    "/Flabull",
    "/Toadflame",
    "/Frokkuna"]; */