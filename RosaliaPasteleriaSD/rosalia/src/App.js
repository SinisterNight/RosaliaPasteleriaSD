import React from 'react';
import './App.css';
import Navbar from './Navbar';
import watermark from './rosaliaLogo.png';
import './watermark.css';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/instagram';
import 'react-social-icons/facebook';

function App() {
  return (
    <div>
      <Navbar />
      <table className="cool-table">
        <thead>
          <tr>
            <th colSpan="2">HORARIO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>lunes</td>
            <td>10:00AM A 7:00PM</td>
          </tr>
          <tr>
            <td>martes</td>
            <td>10:00AM A 7:00PM</td>
          </tr>
          <tr>
            <td>miercoles</td>
            <td>10:00AM A 7:00PM</td>
          </tr>
          <tr>
            <td>jueves</td>
            <td>10:00AM A 7:00PM</td>
          </tr>
          <tr>
            <td>sabado</td>
            <td>10:00AM A 7:00PM</td>
          </tr>
          <tr>
            <td>domingo</td>
            <td>10:00AM A 7:00PM</td>
          </tr>
        </tbody>
		<h3>Direcion</h3>
		<p style={{ }}>
        Carmen Mendoza De Cornielle #74<br/>
	    Ensanche Quisqueya
      </p>
      </table>
	  <div className="socials">
  <h2>Socials</h2><br/>
  <div className="social-icons">
    <SocialIcon url="https://www.instagram.com/rosaliapasteleriard/?hl=en" />
    <SocialIcon url="https://www.facebook.com/RosaliaPasteleriaArtesanal/" /><br/>
	<p>
	<strong>siguenos en facebook<br/> o instagram!</strong>
	</p>
  </div>
  <div className='contact'>
  <p>
  <strong>Numbero De Contacto:</strong><br/>
  <i>849-856-0988</i>
  </p>
  </div>
</div>





	   
	  
	  
      <div>
        <img src={watermark} alt="Watermark" className="watermark-image" />
      </div>
	  
    </div>
  );
}

export default App;
