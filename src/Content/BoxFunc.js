
import React from 'react'
import {setCookie,getCookie} from '../Content/CookiesFunc'


class BoxFunc extends React.Component{

    constructor(props)
    {
        super(props);
        this.text = props.text;
        this.size = props.size;
        this.img = props.img;
        this.state = {changeState: true};
        this.domain = props.domain;
    }

    do()
    {
        if(this.domain==="")
        {
        setCookie("ShowOnScreen",this.text);
        this.setState({changeState: true });
        console.log(getCookie("ShowOnScreen"));
        }else
        {
            window.location.href = "https://"+this.domain;
        }
    }

    //{this.dol()}

    render()
    {
        
        return(
        <div className="Content_Boxes_Frame">
            
            <img className="Content_Box_Image" 
            src={this.img} 
            alt="icon"  
            height={100*this.size} 
            width={100*this.size} 
            onClick={() => this.do()}
            
            
            />
            
            
            <svg className="Content_Box"   width={160*this.size} height={160*this.size}>
                
                <g transform="translate(5,5)">
                <rect id="Content_Boxes" 
                data-name={this.text} 
                className="TitleContentBtn" 
                width={150*this.size} height={150*this.size} 
                rx={15*this.size} ry={15*this.size}/>
                </g>                  
            </svg> 

            <svg className="Content_Boxes_Text" overflow="visible"  width={160*this.size} height={30*this.size}>
            <g transform="translate(0,0)">
                <text x="50%" y="80%" text-anchor="middle" className="Top-sites-text"> 
                {this.text}          
                </text>
                </g>
            </svg>
              
        </div>
        );
    
    }
}

//
/*
function nothing(){}
*/
export default BoxFunc