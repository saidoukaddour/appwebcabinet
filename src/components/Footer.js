import React from 'react'
import { Instagram,Facebook,Twitter} from '@mui/icons-material'
import '../style/Footer.css'
function Footer() {
  return (
    <div className='footer'>

            <div className='socialmedia'>
            <Instagram/>
            <Facebook/>
            <Twitter/>
            </div>
            <p> &copy; dental.com</p>
      
    </div>
  )
}

export default Footer
