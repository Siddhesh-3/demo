import React from 'react'
import { Grid, Cell } from 'react-mdl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelope, faMailBulk, faLocationArrow} from '@fortawesome/free-solid-svg-icons'


function Contact() {
    return (
        <div>
        <div className="contact-menu">    
           <Grid className="contact-grid">
           <Cell col={6}>
           <h2>𝑨𝒌𝒔𝒉𝒂𝒕𝒂 𝑺𝒉𝒊𝒏𝒅𝒆</h2>
           <div className="bitmoji" >
           <img src="snapImg.jpg" />
           </div>
          
           {/* <p><b>Need anything built, want to work together or simply wanna have a chat</b></p>          */}
           </Cell>
           
           <Cell col={6}>
           <img src="contactt.png"/>
               <hr/>
               <table>
                   <tr> 
                       <td>
                           <FontAwesomeIcon icon={faPhoneSquare}/>
                           </td>
                           <td>
                       (+91) 8308268016
                       </td>
                   </tr>
                   <tr> 
                       <td>
                           <FontAwesomeIcon icon={faEnvelope}/>
                           </td>
                           <td>
                            akshatashinde4628@gmail.com
                       </td>
                   </tr>
                   <tr> 
                       <td>
                           <FontAwesomeIcon icon={faLocationArrow}/>
                           </td>
                           <td>
                            Pune
                       </td>
                   </tr>
               </table>
               
           </Cell>
            
            </Grid> 
        </div>
        </div>


    )
}

export default Contact
