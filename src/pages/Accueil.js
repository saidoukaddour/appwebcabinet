import React from 'react'
import { Link } from 'react-router-dom'
import accueil from '../assests/accueil.jpg'
import '../style/Accueil.css'
function Accueil() {
  return (
    <div className='home' style={{backgroundImage:`url(${accueil})`}}>
        <div className='headerContainer'>
          <h1>clinique dentaire   </h1>
          <p>soyez la bienvenue</p>
          <Link to="/rendezvous">
          <button>RendezVous</button>
          </Link>

        </div>
     </div>
  )
}

export default Accueil
