import * as React from 'react'

import Image from '../assets/i.jpg'

const DogGirl = () =>{
    return (
        <><div className="flex justify-center h-[70px] bg-gradient-to-b from-[#f2f2f2] via-white/40 to-white mt-[70px]">
        </div><div className="flex justify-center mb-[40px]">
                <img src={Image} alt="" />
            </div></>
    )
}

export default DogGirl