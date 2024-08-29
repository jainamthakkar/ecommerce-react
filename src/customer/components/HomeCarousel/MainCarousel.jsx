import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    const items = MainCarouselData.map((item) => (
        <img 
            key={item.id} 
            className='cursor-pointer' 
            onClick={() => console.log('Image clicked')}
            role='presentation' 
            src={item.image} 
            alt="" 
        />
    )); 
    
    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
            />
        </div>
    );
}

export default MainCarousel;
