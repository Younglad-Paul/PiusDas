import React from 'react';
import Image from 'next/image';
import { Recomended } from '@/utils/nav';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function RecomendedComponent() {
  return (
    <div className="w-full">
      <h3 className="text-center font-semibold my-2">Define your beautiful</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Recomended.map((rec: any) => (
          <SwiperSlide key={rec.name}>
            <div className="image-container">
              <Image 
                src={rec.img} 
                alt={rec.name} 
                layout="fill" 
                objectFit="cover" 
                className="image"
              />
            </div>
            <div className='flex text-sm justify-between'>
              <p>{rec.name}</p>
              <p className='text-yellow-500 italic'>{rec.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
