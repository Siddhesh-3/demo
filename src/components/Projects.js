import React, {useState} from 'react'
import { Tabs, Tab, Card, CardActions, CardText, CardTitle, Button, Grid, Cell,  } from 'react-mdl'
import { Link } from 'react-router-dom'


function Projects() {
    const [state, setState] = useState(
        {
            activeTab:0
        }
    )

    const myFunction = () => {

            return (
            
            <Card shadow={0} className="project1" style={{width: '325px', height: '330px', margin: 'auto'}}>
             <CardTitle expand ><h7>Covid-19 Tracker</h7>
             <img src="covid19.jpg"/>
             </CardTitle>
             <CardText>
             <h4>Covid-19 Tracker</h4>

             </CardText>
             <CardActions border>
                   
                
                <Button colored target="_blank" href="https://github.com/akshata8308/app.github.io">GitHub</Button>
            
             </CardActions>
            </Card>

            )
        }
   
    return (
        <div className="prg-main">
        <Tabs activeTab={state.activeTab}
        onChange={(tabId) => setState({ ...state, activeTab: tabId })} ripple>
            <Tab><h5>Website Development</h5></Tab>
            
        </Tabs>
        <Grid>
            <Cell col={12}>
        <session>
           {myFunction()}
        </session>
        </Cell>
        </Grid>
        </div>

    )
    }

export default Projects
