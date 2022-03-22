import React from 'react'
import image from '../assests/rdvimage.jpg'
import '../style/Rendezvous.css'
function Rendezvous() {
  return (
    <div className='rendezvous'>

            <div className='imageside' style={{backgroundImage:`url(${image})`}}>
            
            </div>

            <div className='formside'>
              <h1>VOUS DEVEZ REMPLIR LE FORMULAIRE CI-DESSOUS</h1>
              <form id="form" methode="POST">
              <label>nom</label>
              <input name="name" placeholder='entre votre nom' type ="text"/>
              <label>prenom</label>
              <input name="prenom" placeholder='entre votre prenom' type ="text"/>
              <label>numero de telephone</label>
              <input name="num" placeholder='entre votre nom' type ="text"/>
              <label>motif</label>
              <select>
              <option>consultaion</option>
              <option>branchiment</option>
              <option>plombage</option>

              </select>
              <button type="submit"> valider</button>
              </form>
            </div>
    </div>
  )
}

export default Rendezvous
