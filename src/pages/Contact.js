import { Email, Instagram, Phone } from '@mui/icons-material'
import React from 'react'
import image from '../assests/image5.jpg'
import '../style/Contact.css'
function Contact() {
  return (
    <div className='contact'>

            <div className='c-imageside' style={{backgroundImage:`url(${image})`}}>
            
            <a href='mailto:oumerassia@gmail.com'><Email/></a>
            <a href='tel:+213556954596'><Phone/></a>
            <a href='https://www.instagram.com/med_saidou/'><Instagram/></a>
            
            
            

            


            </div>

            <div className='c-formside'>
              <h1>VOUS DEVEZ REMPLIR LE FORMULAIRE CI-DESSOUS</h1>
              <form id="form" methode="POST">
              <label>nom</label>
              <input name="name" placeholder='entre votre nom' type ="text" required/>
              <label>prenom</label>
              <input name="prenom" placeholder='entre votre prenom' type ="text" required/>
              <label>Email:</label>
              <input name="email" placeholder='entre votre email' type ="e-mail" required/>
              <textarea placeholder='ecrire votre commentaire ici'></textarea>
              <button type="submit"> valider</button>
              
              </form>
            </div>
    </div>
  )
}

export default Contact
