import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

export const HomePage = () => {
  return (
    <div>
        <MainCarousel/> 
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel sectionName={"Men's Kurta"}/>
        </div>
    </div>
  )
}

export default HomePage
