import React from 'react'
import './TopBar.css'
import logoName from './LogoName.svg'
import searchIcon from './search-solid.svg'
//import {CategoriesNameImage} from './Data/Categories'


class TopBar extends React.Component 
{
  
  constructor()
  {
    super();
    var a;
    
  }
  
  /*
    listener = null;
    
    state = {
        nav:false
    }
    componentDidMount() 
    {
        window.addEventListener("scroll", this.handleScroll);
        
    }
    componentWillUnmount() 
    {
        window.removeEventListener('scroll',this.doNothing);
    }

    handleScroll= () => {
     if (window.pageYOffset > 140) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }

   doNothing = () => {}
*/
  render()
  {
    
    
    return(
      
      <div>
          {/*
        <div className={`Nav ${this.state.nav }`}>
        */}
          <div className={`Nav`}>
            <div className="Top-container">
              <img className='Photu' src={logoName} alt='Web Manager' align="left" href="localhost:3000" />
          
              <div className="search-box" >
                <form>
                  <input type="text" placeholder="Search..." name="search"
                  className="search-input"/>

                  <button className="search-button" type="submit">
                    <img id="search-button-img" src={searchIcon} alt="Search" height="20px" width="20px"/>  
                  </button>          
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default TopBar