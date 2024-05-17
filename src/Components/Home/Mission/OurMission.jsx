import React from 'react'
import img from "../../../assets/img/mission.jpg"

/*
md:flex-row: This changes the direction of the flex container's children to 
be row-based (horizontally aligned) when the screen size is at least medium (md).
This overrides the flex-col setting on medium-sized screens and switches to a row-based layout.
*/

/*
space-y-4: This adds vertical spacing (space-y) between the direct children of the element. 
The value 4 specifies the amount of spacing, in this case, it's likely to be equivalent to 1rem
 based on Tailwind's default spacing scale
*/


const OurMission = () => {
  return (
    <div className='container my-10'>
        <div>
            <h1 className='font-bold text-4xl text-center'>
              Our <span className='text-primary'>Mission</span></h1>
        </div>

        <div className='flex flex-col justify-center md:flex-row
            items-center gap-5 mt-8'>
            {/* img section */}
            <div className='w-full md:w-2/4'>
                <img src={img} alt='img' className='rounded-lg' />
            </div>

            {/* content section  */}
            <div className='w-full md:w-2/4 space-y-4'>
                <h1 className='font-bold text-primary text-lg lg:text-3xl'>To create community where every journey is extraordinary.</h1>
                <h2 className='font-semibold text-lg lg:text-2xl'>Empower individuals to achieve sustainable mobility solutions.</h2>
                <p className='text-sm lg:text-base'> m ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                    ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et
                </p>
                <p className='text-sm lg:text-base'> m ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                    ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et
                </p>
            </div>
        </div>
    </div>
  )
}

export default OurMission
