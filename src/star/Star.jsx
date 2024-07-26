// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line react/prop-types
export default function Star({beforeClassName,afterClassName,colorText}) {
  return (
    <div className='flex justify-center items-center'>
    
      <div className={`min-w-20 h-1 mr-2 ${beforeClassName}`}></div>
           <FontAwesomeIcon icon={faStar} className={`${colorText}`}/>
      <div className={`w-20 h-1 ml-2 ${afterClassName}`}></div>

      </div>
  )
}
