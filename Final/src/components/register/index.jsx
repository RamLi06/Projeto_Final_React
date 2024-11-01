import './style.css'
import Footer from '../footer/index.jsx'
import Header from '../header/index.jsx'
export default function Register(){


    return(
    
    <>
    <Header/>
    <div className='register'>
        <form id='register-form'>
        <h2>Login</h2>

        <input type="text" placeholder='Username' />
        <input type='email' placeholder='Email'/>
        <input type='password' />

        <button id='confirm-btn' type='submit'></button>
        </form>

        <Footer/>
    </div>
    
    </>
    )
}