import React from 'react'
//import ReactDOM from 'react-dom'
//import {Route, Router, Link, Switch} from 'react-router-dom'
//import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'
import AddTiteBtn from './AddTiteBtn'
import AddContentBoxes from './AddContentBoxes'
import './App.css'
import './GridWidth.css'
//import categoryPage from './CategoryPage'
import TopBar from './TopBar'

//const Swealrt = withReactContent(Swal)


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
        <div className="Experimental_Button" >
          <button onClick={() => this.goHome()}>Home</button> 
          <button onClick={() => this.goTopSites()}>Top Sites</button>
          <button onClick={() => this.goAllCategories()}>All Categories</button> 
          <button onClick={() => this.goSpecificCategory()}>Specific Category</button>

        </div>


        {/*Top Sites Heading*/}    
        {showHomePage||showTopSites?    
        <AddTiteBtn text="Top Sites" size='0.9' width='1' />
        :null}

        {/*Top Sites Contents*/}
        {showHomePage?
        <AddContentBoxes lines ='1'/>
        :null}

        {/*All Categories Heading*/}
        {showHomePage||showAllCategories?
        <AddTiteBtn text="All Categories" size='1' width='1.2' />
        :null}

        {/*Specific Category Heading*/}
        {showSpecificCategory?
        <AddTiteBtn text="Specific Category" size='1' width='1.2' />
        :null}



   

        {/*All Categories Contents*/}
        
        <AddContentBoxes lines='10'/>   
        
        
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
  }

  goTopSites = () => {
    this.setState({
      showHomePage: false,
      showTopSites: true,
      showAllCategories: false,
      showSpecificCategory: false
    });
  }

  goAllCategories = () => {
    this.setState({
      showHomePage: false,
      showTopSites: false,
      showAllCategories: true,
      showSpecificCategory: false
    });
  }

  goSpecificCategory = () => {
    this.setState({
      showHomePage: false,
      showTopSites: false,
      showAllCategories: false,
      showSpecificCategory: true
    });
  }

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
