import React from 'react'
//import DBF from './DBfunctions'
//import CategoriesData from './Data/Categories'

class AddContentBoxes extends React.Component

{
    

    constructor(props)
    {
      super();
      this.screenWidthParts = 0;
      this.calculateScreenWidthParts();
      this.lines = props.lines;
      

      
      
    }

    render()
    {
        return(
            <div className='AllBoxes'>
            {this.AddMultipleLineOfBoxes()}
            
            </div>
        )
    }

    AddMultipleLineOfBoxes()
    {
        var sabDabba = new Array(this.lines);
        
        for (let index = 0; index < this.lines; index++) {            
            sabDabba[index] = this.AddOneLineContentBoxes();            
        }
          return sabDabba
    }

    calculateScreenWidthParts() {
        var width = window.innerWidth
        this.screenWidthParts = parseInt(width/160)     
      }

    AddOneLineContentBoxes() {
        var dabba = new Array(this.screenWidthParts);
        
          for (let index = 1; index <= this.screenWidthParts; index++) {            
            dabba[index] = this.AddContentBox("Sample "+index, 0.9)            
          }
          return(
            <div className={"Grid-width-"+this.screenWidthParts} >
            {dabba}
            </div>
          )
      }

    AddContentBox(text,size) {
        return(
          <div>
            <svg id="Content_Boxes_Frame" width={160*size} height={160*size}>
                <g transform="translate(5,5)">
                  <rect id="Content_Boxes" 
                  data-name={text} 
                  className="TitleContentBtn" 
                  width={150*size} height={150*size} 
                  rx={15*size} ry={15*size}/>
                </g>    
                <text id="Content_Boxes_Text" x={40*size} y={25*size} className="Top-sites-text"> 
                  {text}          
                </text>
            </svg>    
          </div>
        );
        
      }
}

export default AddContentBoxes