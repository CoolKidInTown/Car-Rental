import React from 'react'

/*transition: This indicates that transitions should be applied to 
 the specified properties.Below, it's the bg color and text color.*/

const WhyUsCard = ({icon, title}) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100
         hover:bg-secondary hover:text-white transition
          duration-200 ease-in-out rounded-md cursor-pointer'>
        <p >{icon}</p>
        <h1 className='text-primary text-3xl font-bold'>{title}</h1>
        <p className='text-sm'>
            rem ipsum dolor sit amet, consectetur adipiscing elit, 
            eiusmod tempor incididunt ut labore et dolore magna aliq. 
            Ut enim ad miniveniam, quis nostrud exercitation ullamco 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure
        </p>
    </div>
  )
}

export default WhyUsCard
