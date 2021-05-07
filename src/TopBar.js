import React from 'react'
import './TopBar.css'
import logoName from './LogoName.svg'

class TopBar extends React.Component 
{
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

  render()
  {
    return(
        <div>
        <div className={`Nav ${this.state.nav }`}>
        <div className="Top-container">
          <img className='Photu' src={logoName} alt='Web Manager' align="left" href="localhost:3000"/>
          
        </div>
        </div>
        </div>
    );
  }
}
export default TopBar