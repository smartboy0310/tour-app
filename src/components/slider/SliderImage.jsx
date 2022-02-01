import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"
import { SliderData } from './SliderData'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import './SliderImage.css'

const PreviousBtn = (props) => {
   const {className, onClick} = props
   return (
      <div className={className}onClick={onClick}>
         <ArrowBackIos style={{color:"black"}}/>
      </div>
   )
}
const NextBtn = (props) => {
   const {className, onClick} = props
   return (
      <div className={className} onClick={onClick}>
         <ArrowForwardIos style={{color:"black"}}/>
      </div>
   )
}
const SliderImage = () => {
  
  return (
    <>
      <section className="section-slider">
         <h2 className="slider-heading">
            FOTO LAVHALAR
         </h2>
       <div className="slider">
       <Slider autoplay 
        autoplaySpeed={5000} 
        dots 
        initialSlide={2} 
        infinite
        prevArrow={
         <PreviousBtn />
        }
        nextArrow={
           <NextBtn />
        }
        customPaging={(i)=>{
           return(
              <div>
                  <img className='sub-image' src={SliderData[i]} alt="" />
              </div>
           )
        }}
        dotsClass='slick-dots custom-indicator'
        >
           {
              SliderData.map((item, index) =>(
                  <div key={index}>
                     <img className='image-slide' src={item} alt="Obyektlat rasmi" height={500
                     } />
                  </div>
              ))
           }
        </Slider>
       </div>
      </section>
    </>
  )
}

export default SliderImage
