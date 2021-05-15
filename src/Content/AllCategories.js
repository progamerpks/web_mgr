import React from 'react'
import BoxFunc from './BoxFunc';
import BlankBoxFunc from './BlankBoxFunc';
//const BoxFunc = require('./BoxFunc');
import {CategoriesNameImage} from '../Data/Categories'

//console.log("Mak");

//var wapas = new Array(CategoriesNameImage.length);
var remainingBoxes;
let addedBoxes;

class AllCategories extends React.Component
{
    constructor()
    {
        super();
        remainingBoxes = CategoriesNameImage.length;
        addedBoxes = parseInt(0);
        this.screenWidthParts = parseInt(window.innerWidth/160);
        //console.log(window.innerWidth/160);
        //console.log(this.screenWidthParts);

        this.lines = remainingBoxes/this.screenWidthParts;
        //console.log(this.lines);

        if(this.lines!==parseInt(this.lines))        
        this.lines = parseInt(this.lines)+1;

        //console.log(this.lines);
        //this.lol();
        
    }

    AddMultipleLineOfBoxes()
    {
        var sabDabba = new Array(this.lines);
        //console.log(this.lines);
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
                                text={CategoriesNameImage[addedBoxes][0]} 
                                img={CategoriesNameImage[addedBoxes][1]}
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
/*    
    lol()
    {
        
        for (let index = 0; index < CategoriesNameImage.length; index++) {
            wapas[index]= <BoxFunc 
            text={CategoriesNameImage[index][0]} 
            img={CategoriesNameImage[index][1]}
            size="1"/>
            
        }
        
    }
*/
    render(){

        

        

        return (
            <div className='AllBoxes' >
            {this.AddMultipleLineOfBoxes()}
            
            </div>
        )
    }   
}

export default AllCategories