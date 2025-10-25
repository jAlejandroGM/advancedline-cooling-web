import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ProductCarousel.module.css";

function ProductCarousel({ items = [], renderItem, autoplayMs = 3000 }) {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, Autoplay]}
      navigation
      slidesPerView={3}
      slidesPerGroup={1}
      loop
      spaceBetween={32}
      autoplay={{
        delay: autoplayMs,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx} className={styles.slider}>
          {renderItem ? renderItem(item, idx) : null}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductCarousel;
