import React from 'react'
import '../contact/cstyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faMailBulk, faPhone} from '@fortawesome/free-solid-svg-icons';
import cimage1 from '../../assets/cimage1.jpg'

const Contact = () => {
  return (
    <div id='Contact' className='section-p'>

      <div className="info">
        <div className="left">
          <h2>Chat To Our Friendly Team</h2>
          <p>We'd love to hear from you! Please get in touch</p>
          <div className="social">
            <h4>Follow Us</h4>
            <div className="social-icons">
            <a href="https://api.whatsapp.com/send?phone=+2347033827430" target='_blank'rel="noreferrer">
                 <i class="fa-brands fa-facebook"></i>
       </a>

       <a href="https://www.linkedin.com/in/ifeoma-obodozie-1233241aa" target='_blank'rel="noreferrer">
        <i class="fa-brands fa-instagram"></i>
        </a>
            </div>
          </div>
        </div>
        <div className="right">
            <div className="co">
            <FontAwesomeIcon icon={ faAddressBook} className='icon con'/>
            <p>Lagos, Nigeria</p>
            </div>

            <div className="co">
            <a href='tel:+234906573944'>
            <FontAwesomeIcon icon={ faPhone} className='icon con'/>
             <p>+234906573944</p>
             </a>
            </div>
           

            <div className="co">
            <a href="mailto:Feguson2000@yahoo.co.uk">
            <FontAwesomeIcon icon={ faMailBulk} className='icon con'/>
         <p>Feguson2000@yahoo.co.uk</p>
         </a>
            </div>
        </div>
      </div>
      <div className="bg">
      <img src={cimage1} alt="image" />
      </div>
    </div>
  )
}

export default Contact