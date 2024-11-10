import React, { Suspense } from 'react'
import {Html,PerspectiveCamera, View,OrbitControls} from "@react-three/drei"
import Lights from './Lights';
import IPhone from './IPhone';
import Loader from './Loader';
import * as THREE from 'three'


const ModelView = ({index,groupRef,gsapType,controlRef,setRotationState,size,item}) => {
  
  
  return (
   <View
   index={index}
   id={gsapType}
   className={` w-full h-full absolute ${index === 2? 'right-[-100%]':''}`}

   >
    {/*AMBIENT LIGHT */}
    <ambientLight intensity={0.5}/>


    {/*camera that simulates the view of the human eye */}
    
   <PerspectiveCamera makeDefault position={[0,0,4]} />
   <Lights/>

   <OrbitControls
   makeDefault
   ref={controlRef}
   enableZoom={false}
   enablePan={false}
   rotateSpeed={0.4}
   target={new THREE.vector3(0,0,0)}
   onEnd={()=>SetRotationState(controlRef.current.getAzimuthalAngle())}
   />

   <group ref={groupRef} name={`${index === 1? 'small':'large'}  `} position={[0,0,0]}>
   <Suspense fallback={<Html><div><Loader/></div> </Html>}>
      <IPhone 
      scale={index === 1 ? [15,15,15]: [17,17,17]}
      item={item}
      size={size}
      />
   </Suspense>

   </group>

   </View>
  )
}

export default ModelView