import { React } from 'react'

import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Carosel.css"
import Card from '../Card/Card';



function Carosel({ data, navId }) {

    return (
        <div className='carosel-container'>
            <Swiper
                className='swiper'
                modules={[Virtual, Navigation, Pagination]}
                // onSwiper={setSwiperRef}
                slidesPerView={7}
                // centeredSlides={true}
                spaceBetween={10}
                // pagination={{
                //     type: 'fraction',
                // }}
                navigation={{ prevEl: `.left-arrow-${navId}`, nextEl: `.right-arrow-${navId}` }}
                virtual
            >
                {
                    data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card
                                data={item}
                                key={item.id}
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            <div className={`left-arrow-${navId} left-arrow arrow-btn`}>
                <img src='./leftarrow.png' alt='leftarrow' />
            </div>
            <div className={`right-arrow-${navId} right-arrow arrow-btn`}>
                <img src='./rightarrow.png' alt='rightarrow' />
            </div>
        </div>

    )
}

export default Carosel