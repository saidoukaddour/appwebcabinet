import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/logo.jpg'
import '../style/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder'
function Navbar() {

    const [openlinks,setopenliks]=useState(false);
    function toggleNavbar(){
            setopenliks(!openlinks)
    }
  return (
    <div className='navbar'>

            <div className='leftSide' id={openlinks ? "open" :"close"}>

                    <img src={logo}/>
                    <div className='hiddenLinks'>

                            <Link to='/'>Accueil</Link>
                            <Link to='/rendezvous'>RendezVous</Link>
                            
                    </div>
            </div>

            <div className='rightSide'>

                    <Link to='/'>Accueil</Link>
                    <Link to='/rendezvous'>RendezVous</Link>
                    
                    <button onClick={toggleNavbar}>
                    <ReorderIcon />
                    </button>
            </div>
      
    </div>
  )
}

export default Navbar
