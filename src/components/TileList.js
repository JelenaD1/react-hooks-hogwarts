import React from "react"
import HogTile from "./HogTile"

const TileList = ({hogs}) => {
    

    return (
        <div className="ui grid container"> 
        {hogs.map((hog) => {
            return ( 
           <HogTile hog={hog}
                    name={hog.name}
                    image={hog.image} 
            />

            )
          })  
        }  
        </div>      
    )        
    
}



export default TileList