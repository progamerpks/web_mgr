import './App.css';
import './GridWidth.css'

var screenWidthParts = 0

function App() {
  return (
    <div className="App">

      {intilization()}
      
      {/*Top Menu Bar*/}
      <div className="Top-container">
      <a align="left" href="localhost:3000">
        Project_Name
      </a>
      </div>
        
      {/*Top Sites Heading*/}
      <div className="Top-sites">
        {AddTiteBtn("Top Sites",0.9,1)}   
      </div>

      {/*Top Sites Contents*/}
      <div className={"Grid-width-"+screenWidthParts} >
        {AddTopSitesContentBoxes()} 
      </div>

      {/*All Categories Heading*/}
      <div className="Top-sites">
        {AddTiteBtn("All Categories",1,1.2)}   
      </div>

      {/*All Categories Contents*/}
      <div className={"Grid-width-"+screenWidthParts} >
        {AddTopSitesContentBoxes()} 
      </div>

      <div className={"Grid-width-"+screenWidthParts} >
        {AddTopSitesContentBoxes()} 
      </div>

      <div className={"Grid-width-"+screenWidthParts} >
        {AddTopSitesContentBoxes()} 
      </div>

      <div className={"Grid-width-"+screenWidthParts} >
        {AddTopSitesContentBoxes()} 
      </div>

    </div>
  );
}

function intilization() {
  calculateScreenWidthParts()
  
  
}



function calculateScreenWidthParts() {
  var width = window.innerWidth
  screenWidthParts = parseInt(width/160) 

  console.log(width)
  console.log(screenWidthParts)
}

function AddTiteBtn(text, size, wide) {
  return(
    <svg width={160*size*wide} height={40*size}>
          <g transform="translate(5,5)">
            <rect id="Rounded_Rectangle_1" 
            data-name="Rounded Rectangle 1" 
            className="TitleBtn" 
            width={150*size*wide} height={30*size} 
            rx={15*size} ry={15*size}/>
          </g>    
          <text id="TextElement" x={40*size} y={26*size} className="Top-sites-text"> 
          {text}          
          </text>
        </svg>    
  );
}

function AddTopSitesContentBoxes() {
    
  var dabba = new Array(screenWidthParts);
  
    for (let index = 1; index <= screenWidthParts; index++) {
      
      dabba[index] = AddContentBox("Sample "+index, 0.9)
      console.log("sample "+index)
    }
    return dabba
}

function AddContentBox(text,size) {
  return(
    <div >
      <svg width={160*size} height={160*size}>
          <g transform="translate(5,5)">
            <rect id="Rounded_Rectangle_1" 
            data-name={text} 
            className="TitleContentBtn" 
            width={150*size} height={150*size} 
            rx={15*size} ry={15*size}/>
          </g>    
          <text id="TextElement" x={40*size} y={25*size} className="Top-sites-text"> 
            {text}          
          </text>
      </svg>    
    </div>
  );
  
}

function AddButtonBox(text,size) {
  return(
    <div>

    </div>
  )
}

export default App;
