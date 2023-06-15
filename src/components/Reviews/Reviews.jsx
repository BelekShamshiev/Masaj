import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import s from "./Reviews.module.scss";
import Image from "next/image";
const Reviews = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.header_title}>
          <div className={s.header_title_logo}>
            <Image src="/logo.svg" alt="logo" width={90} height={90} />
          </div>
          <div className={s.header_title_desc}>
            <a href="/">Главная</a>
            <a href="#">Информация обо мне и отзывы</a>
          </div>
        </div>
      </div>
      <div className={s.title}>
        <div className={s.title_photo}>
          <Image src="/foto.jpeg" alt="foto" width={445} height={290}></Image>
        </div>
        <div className={s.title_swiper}>
          <Swiper
            loop
            speed={1000}
            spaceBetween={50}
            navigation={true}
            modules={[Navigation]}
            className={s.rev_swiper}
          >
            <SwiperSlide>
              <Image src="/foto.jpeg" alt="photo" width={600} height={290} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/foto.jpeg" alt="photo" width={600} height={290} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/foto.jpeg" alt="photo" width={600} height={290} />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Image src="/foto.jpeg" alt="photo" width={600} height={290} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
