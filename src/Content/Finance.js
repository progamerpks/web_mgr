import React from 'react'
import BoxFunc from './BoxFunc';
import BlankBoxFunc from './BlankBoxFunc';
import {data} from '../Data/Finance'


var remainingBoxes;
let addedBoxes;

class Finance extends React.Component
{
    constructor()
    {
        super();
        remainingBoxes = data.length;
        addedBoxes = parseInt(0);
        this.screenWidthParts = parseInt(window.innerWidth/160);

        this.lines = remainingBoxes/this.screenWidthParts;

        if(this.lines!==parseInt(this.lines))        
        this.lines = parseInt(this.lines)+1;
   
    }

    AddMultipleLineOfBoxes()
    {
        var sabDabba = new Array(this.lines);
        
        for (let index = 0; index < this.lines; index++) {            
            sabDabba[index] = this.AddOneLineContentBoxes(); 
                     
        }
          return sabDabba
    }

    AddOneLineContentBoxes() {

        var dabba = new Array(this.screenWidthParts);
        
        
        for (let index = 0; index < this.screenWidthParts; index++) 
        {
            remainingBoxes = remainingBoxes -1;
            if(remainingBoxes>=0)
            {
                dabba[index]= <BoxFunc 
                                text={data[addedBoxes][1]} 
                                img={data[addedBoxes][3]}
                                size="0.9"/>            
            }else{
                dabba[index]= <BlankBoxFunc size="0.9"/>
            }
            //console.log("dabba"+addedBoxes)
            addedBoxes = addedBoxes +1;
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

export default Finance