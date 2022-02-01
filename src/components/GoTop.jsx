import React, { useEffect, useState } from 'react'
import {useWindowScroll} from 'react-use'
import './GoTop.css'

function GoTop() {

  const {y: pageYOffset} = useWindowScroll()
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    if(pageYOffset>500) {
      setVisible(true)
    } else{
      setVisible(false)
    }

  }, [pageYOffset])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth'})

  if(!visible){
    return false
  }
  return (
    <>
      <div className="scroll__go-top" onClick={scrollToTop}>
        <i className='icon far fa-chevron-up'></i>
      </div>
    </>
  )
}

export default GoTop
