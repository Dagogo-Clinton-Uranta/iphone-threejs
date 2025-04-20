
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (target,animationProps,scrollProps)=>{
  
    gsap.to(target,{
        ...animationProps,
        scrollTrigger:{
            trigger:target,
            //1.) toggle actions controls the animation in 4 different positions
            //2.) when you scroll in 
            //3.)when you come back
            //4.)when you scroll down
            //when you scroll up once again
            toggleActions:'restart reverse restart reverse',
            start: 'top 85%', //when the trigger is 85% from the top of  the viewport, it will activate
            ...scrollProps
        }

    })
}




export  const animateWithGsapTimeline = (
    timeline,
    rotationRef,
    rotationState,
    firstTarget,
    secondTarget,
    animationProps) => {

      //a timeline is a sequencing tool that acts as a container for tweens and other
      //timelines

      //without timelines, building complex sequences would be far more cumbersome because you'd need
      //to use a delay for every animation

   
       timeline.to(rotationRef.current.rotation,
        {  
            y: rotationState,
            duration:1,
            ease: 'power2.inOut'
        }
       )


       timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'  //less than here, means insert the string at the start of the previous animation
       )

       timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'  //less than here, means insert the string at the start of the previous animation
       )
}