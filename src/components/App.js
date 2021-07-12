import React, {useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList"
import HogSearch from "./HogSearch"
import hogs from "../porkers_data";





function App() {

  const [greasedHogs, setGreasedHogs] = useState(false)
  const [sortOption, setSortOption] = useState("none")
  

  const renderGreasedHogs = greasedHogs ? (
     hogs.filter((hog) => 
      hog.greased === true )
    ) :  hogs

    const sortedGreasedHogs = () => {
      if (sortOption === "none") {
        return renderGreasedHogs
      } else if (sortOption === "name") {
        return renderGreasedHogs.sort((a, b) => a.name.localeCompare(b.name))
      } else if ( sortOption === "weight") {
        return renderGreasedHogs.sort((a,b) => a.weight - b.weight)
      }
      
   }

    console.log(renderGreasedHogs)
    console.log(hogs)
  


  const handleGreasedHogs = () => {
    setGreasedHogs(!greasedHogs)
  }

  const handleChangeSort = (e) => {
    setSortOption(e.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <HogSearch 
      greasedHogs={greasedHogs}
      onCheckHandle={handleGreasedHogs}
      sortOption={sortOption}
      onChangeSort={handleChangeSort}
                
                 />
      
      <TileList 
        hogs={sortedGreasedHogs()}


      
      />
      
    </div>
  );
}

export default App;
