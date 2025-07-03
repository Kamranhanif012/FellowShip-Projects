import { useState } from 'react'
import StarRating from './Components/Star-rating/index.jsx'
import ImageSlider from './Components/Image-slider/index.jsx'
import LoadMoreData from './Components/load-more-data/index.jsx'
import TreeView from './Components/Tree-view/index.jsx'
import menus from "./Components/Tree-view/data.js";
import './App.css'

function App() {


  return (
    <>
    <Randomcolor/>
    <StarRating 
     noOfStars={8}  />

    <ImageSlider
      url={'https://picsum.photos/v2/list'} page={"1"} limit={"10"}
    />*/

    <LoadMoreData

    limit='20'
    
    />

    <TreeView  menus={menus}/>

</>

  )
}

export default App
