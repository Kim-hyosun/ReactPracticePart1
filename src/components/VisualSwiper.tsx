import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { asset } from '../lib/asset';

// 원본 번들의 비주얼 슬라이더: pagination(clickable) + autoplay(3s) + loop
const SLIDES = [
  {
    id: 1,
    title: 'CREATIVE DESIGN',
    des1: '정직과 신뢰, 디자인을 최우선으로 생각하며',
    des2: '고객과 함께 할 수 있는 든든한 파트너가 되겠습니다.',
    url: 'assets/images/visual01.jpg',
  },
  {
    id: 2,
    title: 'VERSATILE DESIGN',
    des1: '정직과 신뢰, 디자인을 최우선으로 생각하며',
    des2: '고객과 함께 할 수 있는 든든한 파트너가 되겠습니다.',
    url: 'assets/images/visual02.jpg',
  },
  {
    id: 3,
    title: 'RESPONSIVE DESIGN',
    des1: '정직과 신뢰, 디자인을 최우선으로 생각하며',
    des2: '고객과 함께 할 수 있는 든든한 파트너가 되겠습니다.',
    url: 'assets/images/visual03.jpg',
  },
];

function VisualSwiper() {
  return (
    <Swiper
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {SLIDES.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="slideimg"
          style={{ background: `url(${asset(slide.url)}) no-repeat 50%/cover` }}
        >
          <h2>{slide.title}</h2>
          <p>
            {slide.des1}
            <br />
            {slide.des2}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default VisualSwiper;
