import React, {useState} from "react"


const HogsTile = ({hog, name, image}) => {

  const [hogList, setHogList] = useState(hog)

  const [isShowingDetails, setIsShowingDetails] = useState(false)

  const renderHogDetails = () => {
    return isShowingDetails ? 
      (
    <div>
      <ul>
    <li>{hog.weight}</li>
    <li>{hog.greased}</li>
    <li>{hog["highest medal achieved"]}</li>
    <li>{hog.specialty}</li>
    </ul>
    </div>

    ) :  null
  }
  

  const handleHogDetails = () => {
    console.log("hello")
    setIsShowingDetails(!isShowingDetails)

  }
 

  return (
    <div className="ui eight wide column">
    <li>{name}</li>
    <img  onClick={handleHogDetails} alt="" width="200" height="200" src={image}/>
    {renderHogDetails()}
     </div>
    
  )             
   
}


export default HogsTile