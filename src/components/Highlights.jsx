
import {useState,useEffect} from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import VideoCarousel from './VideoCarousel'

useGSAP(()=>{

  gsap.to( '#title',{
  opacity:1,
  //delay:2.5  //in seconds
  y:0
  })


  gsap.to( '.link',{
   opacity:1,
   y:0,
   //delay:2.5 //in seconds
   duration:1,
   stagger:0.25
   })

 },[])



const Highlights = () => {
  return (
    <section id= "highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      
      <div className="screen-max-width">
          <div className="mb-12 w-full md:flex items-end justify-between">
            <h1 id="title" className="section-heading">
             Get the highlights 
            </h1>

            <div className="flex flex-wrap items-end gap-5">
                <p className="link">
                  Watch the film
                  <img src={watchImg} className="ml-2"/>
               </p>
            </div>
          </div>
          <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights