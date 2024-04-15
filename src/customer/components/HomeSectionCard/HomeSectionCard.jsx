import React from 'react'

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden w-[15rem] mx-3 border'>

            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src="https://www.ethnicplus.in/media/catalog/product/cache/77b9a44d9276879ccdde931a01149182/r/-/r-1.jpg" alt="p-img" />
            </div>

            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Aasopalav</h3>
                <p className='mt-2 text-sm text-gray-500'>Red Georgette Party Wear Lehenga Choli With Dupatta</p>
            </div>

        </div>
    )
}

export default HomeSectionCard