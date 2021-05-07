import React from 'react'

    class AddTiteBtn extends React.Component
    {
        listenr=null


        text="Error";
        size=0;
        wide=0;

        

        constructor(props)
        {
            super(props);
            this.text = props.text;
            this.size = props.size;
            this.wide = props.width;
        }
/*
        componentWillUnmount{
            doNothing();
        }
        doNothing = () => {}
*/
        render()
        {
            return(
            <div className='Top-sites'>
            <svg width={160*this.size*this.wide} height={40*this.size}>
                <g transform="translate(5,5)">
                    <rect id="Rounded_Rectangle_1" 
                    data-name="Rounded Rectangle 1" 
                    className="TitleBtn" 
                    width={150*this.size*this.wide} height={30*this.size} 
                    rx={15*this.size} ry={15*this.size}/>
                </g>    
                <text id="TextElement" x={40*this.size} y={26*this.size} className="Top-sites-text"> 
                    {this.text}          
                </text>
            </svg>
            </div>
            )
        }
    }

    export default AddTiteBtn