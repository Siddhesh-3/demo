import React from 'react'
import { Grid,Cell } from 'react-mdl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faStackOverflow, faPython, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Home() {
    return (
        <div>
        <div style={{width: '80%', margin: 'auto'}} >
            <Grid>
            <Cell col={12}>
            <div className="img">
                <img src="Akshata11.png" style={{height:'230px',width:'230px'}} />
            </div>
        <div className="img2">
             <img src="aksh.png"/>
        </div>
    
         <div className="banner-text">
            <h2>STUDENT</h2>
                <hr/>
                <p>Web Developer</p>
        
                <div className="home-icon">

                <span className="git">
                   <a target="_blank" href="https://github.com/akshata8308/app.github.io">
                        <FontAwesomeIcon icon = {faGithub} />
                   </a>
                </span>
           
                <span className="li">
                    <a target="_blank" href="https://www.linkedin.com/in/akshata-shinde-650723169/">
                        <FontAwesomeIcon icon = {faLinkedinIn}/>
                    </a>
                </span>
                <span className="so">
                    <a target="_blank" href="https://stackoverflow.com/users/13891434/akshata-shinde">
                        <FontAwesomeIcon icon= {faStackOverflow}/>
                     </a>
                </span>
                <span className="insta">
                    <a target="_blank" href="https://www.instagram.com/_akshata_10_/">
                        <FontAwesomeIcon icon = {faInstagram}/>
                    </a>
                </span>
                <span className="twitter">
                    <a target="_blank" href="https://twitter.com/Akshata8308">
                        <FontAwesomeIcon icon = {faTwitter}/>
                    </a>
                </span>
                
           
        </div>
        </div>
            </Cell>
            </Grid>
        </div>
        </div>
    )
}

export default Home
