import React from 'react';
import HomeTopSites from './Content/HomeTopSites'
import AllCategories from './Content/AllCategories'
import TopSites from './Content/TopSites';
import Agriculture from './Content/Agriculture';
import Anime from './Content/Anime';
import Books from './Content/Books';
import Cooking from './Content/Cooking';
import Entertainment from './Content/Entertainment';
import Finance from './Content/Finance';
import Jobs from './Content/Jobs';
import Shopping from './Content/Shopping';
import Blog from './Content/Blog';
import Cloud from './Content/Cloud';
import SocialMedia from './Content/SocialMedia';
import Emails from './Content/Emails';
import Space from './Content/Space';
import Government from './Content/Government';
import Developer from './Content/Developer';
import Maps from './Content/Maps';
import SearchEngine from './Content/SearchEngine';
import Travel from './Content/Travel';
import Bank from './Content/Bank';


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
                console.log("AllCategories")          
                break;

            case "HomeTopSites":
                wapas = <HomeTopSites />
                console.log("HomeTopSites")
                break;

            case "TopSites":
                wapas = <TopSites />
                console.log("TopSites")
                break;

            case "Agriculture":
                wapas = <Agriculture />
                console.log("Agriculture")
                break;

            case "Anime":
                wapas = <Anime />
                console.log("Anime")
                break;

            case "Books":
                wapas = <Books />
                console.log("Books")
                break;


            case "Cooking":
                wapas = <Cooking />
                console.log("Cooking")
                break;


            case "Entertainment":
                wapas = <Entertainment />
                console.log("Entertainment")
                break;
 

            case "Finance":
                wapas = <Finance />
                console.log("Finance")
                break;


            case "Jobs":
                wapas = <Jobs />
                console.log("Jobs")
                break;
 

            case "Shopping":
                wapas = <Shopping />
                console.log("Shopping")
                break;

            case "Blog":
                wapas = <Blog />
                console.log("Blog")
                break;
                                      
                case "Cloud":
                    wapas = <Cloud />
                    console.log("Cloud")
                    break;

                    case "Social Media":
                    wapas = <SocialMedia />
                    console.log("SocialMedia")
                    break;

                    case "Emails":
                    wapas = <Emails />
                    console.log("Emails")
                    break;

                    case "Space":
                    wapas = <Space />
                    console.log("Space")
                    break;

                    case "Government":
                    wapas = <Government />
                    console.log("Government")
                    break;

                    case "Developer":
                    wapas = <Developer />
                    console.log("Developer")
                    break;

                    case "Maps":
                    wapas = <Maps />
                    console.log("Maps")
                    break;

                    case "Search Engine":
                    wapas = <SearchEngine />
                    console.log("SearchEngine")
                    break;

                    case "Travel":
                    wapas = <Travel />
                    console.log("Travel")
                    break;

                    case "Bank":
                    wapas = <Bank />
                    console.log("Bank")
                    break;

            default:
                break;
        }

    }

    render(){
        return (
            <div className="Whole_Content_Frame" >
            {wapas}
            </div>
        )
    }   
}

export default AddCntntBxFunc