import React,{useState} from 'react';
import Modal from 'react-modal';
import './Button.css';

Modal.setAppElement('#root')
function Button(){
    const [modalIsOpen,setmodalIsOpen]=useState(false)
    return(
        <>
        <button onClick={()=>setmodalIsOpen(true)} className='button'>Sign in</button>
        <Modal isOpen={modalIsOpen}>
            <div className='popup'>
                <div className='wrap'>
                    <h1 className='pop-head'>Register Now!</h1>
                    <i class="fas fa-times" onClick={()=>setmodalIsOpen(false)}></i>
                </div>
                <form method='GET' className='form-wrap'>
                    <input className='form' type='form' placeholder='Enter your Username'></input>
                    <input className='form' type='password' placeholder='Enter your Password'></input>
                    <div className='login-wrap'><button type='submit' className='login'>Log In</button></div>
                    <h3 className='forgot-password'><a href='p'>Forgot password?</a></h3>
                </form>
            </div>
        </Modal>
        </>
    )
}

export default Button;