import React from 'react'
import {Html,PerspectiveCamera, View,OrbitControls} from "@react-three/drei"

const Loader = () => {

  /*dont forget that you gotta wrap non 3d stuff in html 
    when loading inside the react-three drei view
  
   */
  return (
    
    <Html>
        <div className="absolute top-0 left-0 w-full 
         h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
            Loading ...
        </div>
        </div>

    </Html>
  )
}

export default Loader