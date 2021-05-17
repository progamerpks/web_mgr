import React from 'react'
import BoxFunc from './BoxFunc';

import {data} from '../Data/TopWebsites'




class HomeTopSites extends React.Component
{
    constructor()
    {
        super();
        
        this.screenWidthParts = parseInt(window.innerWidth/160);
   
    }

    AddMultipleLineOfBoxes()
    {
        var sabDabba = this.AddOneLineContentBoxes();
        
        
          return sabDabba
    }

    AddOneLineContentBoxes() {

        var dabba = new Array(this.screenWidthParts);
        
        
        for (let index = 0; index < this.screenWidthParts; index++) 
        {
            
                dabba[index]= <BoxFunc 
                                text={data[index][1]} 
                                img={data[index][3]}
                                size="0.9"/>            
            
            //console.log("dabba"+addedBoxes)
            
        }
          return(
            <div className={"Grid-width-"+this.screenWidthParts} >
            {dabba}
            </div>
          )
      }


    render(){

        return (
            <div className='AllBoxes' >
            {this.AddMultipleLineOfBoxes()}
            
            </div>
        )
    }   
}

export default HomeTopSites