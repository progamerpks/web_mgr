import React from 'react'
//import ReactDOM from 'react-dom'
//import {Route, Router, Link, Switch} from 'react-router-dom'
//import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'
import AddTiteBtn from './AddTiteBtn'
import AddContentBoxes from './AddContentBoxes'
import TopBar from './TopBar'
import AddCntntBxFunc from './AddCntntBxFunc'
import './App.css'
import './GridWidth.css'

import {setCookie,getCookie} from './Content/CookiesFunc'
//import {ShowOnScreen} from '../public/ShowState'

var ShowOnScreen = "Home";
document.cookie = "ShowScreen=Gome;"
//console.log(document.cookie)
//const Swealrt = withReactContent(Swal)
//window.document.createElement(ShowOnScreen,value=Home);

class App extends React.Component{

  constructor(){
    super();

    
    this.state = {
      showButton: false,
      showHomePage: true,
      showTopSites: false,
      showAllCategories: false,
      showSpecificCategory: false,
    };
  }
  
    
  render(){

    const { 
       
      showHomePage,
      showTopSites,
      showAllCategories,
      showSpecificCategory
    } = this.state;

    
    

    return (
      <div className="App">
      
        {/*Top Menu Bar*/}
        <TopBar/>

        <br/><br/>

        {/*Experimental Button*/}
        <br/>
        <div className={showSpecificCategory?"Experimental_Button_On":"Experimental_Button"} >
          <button onClick={() => this.goHome()}>Home</button> 
          <button onClick={() => this.goTopSites()}>Top Sites</button>
          <button onClick={() => this.goAllCategories()}>All Categories</button> 
          <button onClick={() => this.goSpecificCategory()}>Specific Category</button>

        </div>


        {/*Top Sites Heading*/}    
          {showHomePage||showTopSites?   
            <div onClick={() => this.goTopSites()} >
              <AddTiteBtn text="Top Sites" size='0.9' width='1' />
            </div>
          :null}

        {/*Top Sites Contents*/}
        {showHomePage?
        <AddContentBoxes lines ='1'/>
        :null}

        {/*All Categories Heading*/}
          <div onClick={() => this.goAllCategories()} >
            {showHomePage||showAllCategories?
              <AddTiteBtn text="All Categories" size='1' width='1.2' />
            :null}
          </div>

                

        {/*Specific Category Heading*/}
        {showSpecificCategory?
        <AddTiteBtn text="Specific Category" size='1' width='1.2' />
        :null}



   

        {/*All Categories Contents*/}
        {/*
        <AddContentBoxes lines='2' />   
        */}

        {ShowOnScreen==="Home"||ShowOnScreen==="AllCategories"?
        <AddCntntBxFunc show="AllCategories"/>
        :null}
        
      </div>
    );
  } //Render End





  toggleButton = () => {
    this.setState({showButton: !this.state.showButton});
  };

  goHome = () => {
    this.setState({
      showHomePage: true,
      showTopSites: false,
      showAllCategories: false,
      showSpecificCategory: false
    });
    ShowOnScreen="Home";
    //setCookie("ShowScreen","Home");
    console.log(getCookie("ShowScreen"));
  }

  goTopSites = () => {
    this.setState({
      showHomePage: false,
      showTopSites: true,
      showAllCategories: false,
      showSpecificCategory: false
    });
    ShowOnScreen="TopSites";
  }

  goAllCategories = () => {
    this.setState({
      showHomePage: false,
      showTopSites: false,
      showAllCategories: true,
      showSpecificCategory: false
    });
    ShowOnScreen="AllCategories";
  }

  goSpecificCategory = () => {
    this.setState({
      showHomePage: false,
      showTopSites: false,
      showAllCategories: false,
      showSpecificCategory: true
    });   
    ShowOnScreen="SpecificCategory"; 
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
