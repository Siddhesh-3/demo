import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import {Layout, Navigation,Header, Drawer, Content} from 'react-mdl'
import {BrowserRouter, Link, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div >
        <BrowserRouter>
      <div className="demo-big-content">
    <Layout className="bg">
        <Header title="AKSHATA SHINDE" scroll className="header">
            <Navigation style={{color: 'black'}} >
            <Link  to="/">HOME</Link>
                <Link to="/project">PROJECTS</Link>
                <Link to="/resume">RESUME</Link>
                <Link to="/contact">CONTACTS</Link>
                
            </Navigation>
        </Header>

        <Drawer title="AKSHATA SHINDE" >
            <Navigation className="header1">
                <a href="#">HOME</a>
                <a href="#">PROJECTS</a>
                <a href="#">RESUME</a>
                <a href="#">CONTACTS</a>
            </Navigation>
        </Drawer>

        
        <Content>
            <div className="page-content" />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path ="/project" component={Projects}></Route>
                <Route exact path ="/resume" component={Resume}></Route>
                <Route exact path ="/contact" component={Contact}></Route>
            </Switch>
        

        </Content>
    </Layout>
</div>
</BrowserRouter>
    </div>
    
  );
  }

export default App 
