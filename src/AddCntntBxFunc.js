import React from 'react';
import AllCategories from './Content/AllCategories'

var wapas;

class AddCntntBxFunc extends React.Component
{
    
    constructor(props)
    {
        super(props);
        //this.screenWidthParts = parseInt(window.innerWidth/160);
        this.show = props.show;
        this.do();
    }

    do()
    {
        switch (this.show) 
        {
            case "AllCategories":            
                wapas = <AllCategories />            
                break;
            
            default:
                break;
        }

    }

    render(){
        return (
            <div className="Whole_Content_Frame">
            {wapas}
            </div>
        )
    }   
}

export default AddCntntBxFunc