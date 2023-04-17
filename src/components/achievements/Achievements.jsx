import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import dsa from '../../assets/images/dsa.jpg';
import front from '../../assets/images/front.jpg';
import 'swiper/swiper-bundle.css';
import java from '../../assets/images/java.jpg';
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function Achievements() {
  return (
    <section className="section achievements">
        <h2 className="section__title">Achievements</h2>
        <span className="section__subtitle">Certificates</span>
        <div className="achievements__container container">
            <h5 className='swipe'> <AiOutlineDoubleLeft/> <span>Swipe</span>    <AiOutlineDoubleRight/></h5>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={70}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => {}}
            onSlideChange={() => console.log('slide change')}
            className='container achievements_cont'
            //loop={true}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            >
                <div className="my_slide">
                
                    <SwiperSlide className='certi_slide'>
                    
                    <div className="image"><img src={java} alt="" /></div>
                    {/* <h5>Introduction to Java</h5> */}
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="image"><img src={dsa} alt="" /></div>
                    {/* <h5>DSA in Java</h5> */}
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="image"><img src={front} alt="" /></div>
                    {/* <h5>Frontend development</h5> */}
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    </section>
  )
}

export default Achievements
