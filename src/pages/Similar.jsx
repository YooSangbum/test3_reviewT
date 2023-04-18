import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import ProductCard from './ProductCard';

function Similar({ data }) {
  return (
    <div className="Similar mw">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, i) => {
          return (
            <SwiperSlide key={item._id}>
              <ProductCard data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Similar;
