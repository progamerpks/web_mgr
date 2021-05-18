import React from 'react'

//import ReactDOM from 'react-dom'
//import {Route, Router, Link, Switch} from 'react-router-dom'
//import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'

import AddTiteBtn from './AddTiteBtn'
//import AddContentBoxes from './AddContentBoxes'
import TopBar from './TopBar'
import AddCntntBxFunc from './AddCntntBxFunc'
import './App.css'
import './GridWidth.css'
import HomeTopSites from './Content/HomeTopSites'


import {setCookie,getCookie} from './Content/CookiesFunc'



document.cookie = "ShowOnScreen=Home;";

//const Swealrt = withReactContent(Swal)


class App extends React.Component
{

  constructor()
  {
    super();
    this.state = {changeState: true};
    setInterval(this.refresh, 100);
  }
  
    
  render()
  {
    //const {changeState} = this.state;
    //console.log(changeState)
  
    var ShowOnScreen = getCookie("ShowOnScreen");
    
    return (
      <div className="App">
      
        {/*Top Menu Bar*/}
          <TopBar/>

        <br/><br/>

        {/*Experimental Button*/}
        <br/>
        <div className={ShowOnScreen==="SpecificCategories"?"Experimental_Button_On":"Experimental_Button"} >
          <button onClick={() => this.goHome()}>Home</button> 
          <button onClick={() => this.goTopSites()}>Top Sites</button>
          <button onClick={() => this.goAllCategories()}>All Categories</button> 
          {/*<button onClick={() => this.goSpecificCategory()}>Specific Category</button>*/}

        </div>


        {/*Top Sites Heading*/}    

          {ShowOnScreen==="Home"||ShowOnScreen==="TopSites"?   
            <div onClick={() => this.goTopSites()} >
              <AddTiteBtn text="Top Sites" size='0.9' width='1' />
            </div>
          :null}


        {/*Top Sites Contents*/}
        
        {ShowOnScreen==="Home"?
        <div className="Whole_Content_Frame" >
        <HomeTopSites/>
        </div>        
        :null}
        


        {ShowOnScreen==="TopSites"?
        <AddCntntBxFunc show="TopSites"/>
        :null}    
        

        


        {/*All Categories Heading*/}
          
          <div onClick={() => this.goAllCategories()} >
            {ShowOnScreen==="Home"||ShowOnScreen==="AllCategories"?
              <AddTiteBtn text="All Categories" size='1' width='1.2' />
            :null}
          </div>

                
        {/*Specific Category Heading*/}

        {ShowOnScreen==="SpecificCategories"?
        <AddTiteBtn text="Specific Category" size='1' width='1.2' />
        :null}


        {/*All Categories Contents*/}

          {ShowOnScreen==="Home"||ShowOnScreen==="AllCategories"?
            <AddCntntBxFunc show="AllCategories"/>
          :null}

          {ShowOnScreen==="Agriculture"?
            <AddCntntBxFunc show="Agriculture"/>
          :null}

          {ShowOnScreen==="Anime"?
            <AddCntntBxFunc show="Anime"/>
          :null}

          {ShowOnScreen==="Books"?
            <AddCntntBxFunc show="Books"/>
          :null}

          {ShowOnScreen==="Cooking"?
            <AddCntntBxFunc show="Cooking"/>
          :null}

          {ShowOnScreen==="Entertainment"?
            <AddCntntBxFunc show="Entertainment"/>
          :null}

          {ShowOnScreen==="Finance"?
            <AddCntntBxFunc show="Finance"/>
          :null}

          {ShowOnScreen==="Jobs"?
            <AddCntntBxFunc show="Jobs"/>
          :null}

          {ShowOnScreen==="Shopping"?
            <AddCntntBxFunc show="Shopping"/>
          :null}

          {ShowOnScreen==="Blog"?
            <AddCntntBxFunc show="Blog"/>
          :null}

          
          
          {ShowOnScreen==="Cloud"?
            <AddCntntBxFunc show="Cloud"/>
          :null}

          {ShowOnScreen==="Social Media"?
            <AddCntntBxFunc show="Social Media"/>
          :null}

          {ShowOnScreen==="Emails"?
            <AddCntntBxFunc show="Emails"/>
          :null}

          {ShowOnScreen==="Space"?
            <AddCntntBxFunc show="Space"/>
          :null}

          {ShowOnScreen==="Government"?
            <AddCntntBxFunc show="Government"/>
          :null}

          {ShowOnScreen==="Developer"?
            <AddCntntBxFunc show="Developer"/>
          :null}

          {ShowOnScreen==="Maps"?
            <AddCntntBxFunc show="Maps"/>
          :null}


          {ShowOnScreen==="Search Engine"?
            <AddCntntBxFunc show="Search Engine"/>
          :null}

          {ShowOnScreen==="Travel"?
            <AddCntntBxFunc show="Travel"/>
          :null}


          {ShowOnScreen==="Bank"?
            <AddCntntBxFunc show="Bank"/>
          :null}












      </div>
    );
  } //Render End


  refresh = () => {   
    this.setState({changeState: true });  
    
    //console.log(getCookie("ShowOnScreen"));
  }


  goHome = () => {   
    //this.setState({changeState: true });
    setCookie("ShowOnScreen","Home");    
  }

  goTopSites = () => {   
    //this.setState({changeState: true });
    setCookie("ShowOnScreen","TopSites");
  }

  goAllCategories = () => {
    //this.setState({changeState: true });
    setCookie("ShowOnScreen","AllCategories");
  }

  goSpecificCategory = () => {
    //this.setState({changeState: true });
    setCookie("ShowOnScreen","SpecificCategory");
  }
  
  doNothing = () => {}

} //Class End



/*
Swealrt.fire({
  title: <p>Hello World</p>,
  footer: 'Copyright 2021',
  didOpen: () => {
    Swealrt.clickConfirm()
  }
}).then(() => {
  return Swealrt.fire(<p>Shorthand works too</p>)
})

*/






export default App;
