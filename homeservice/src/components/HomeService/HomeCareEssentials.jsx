import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ServiceCard from "./ReusableserviceCard";
import { getRandomImageUrl } from "../../api/imageService";

const HomeCareEssentials = ({ services = [], cardLimit = 6 }) => {
  const borderColors = [
    '#e63946',
    '#1e88e5',
    '#ff9800',
    '#fdd835',
    '#7b1fa2',
    '#00acc1',
  ];

  const formattedServices = useMemo(() => {
    return services.slice(0, cardLimit).map((service, index) => ({
      id: service.id,
      title: service.title || "Untitled Service",
      imageUrl: getRandomImageUrl(600, 400, 1000 + index),
      borderColor: borderColors[index % borderColors.length],
    }));
  }, [services, cardLimit]);


  return (
    <section className="py-5" style={{ backgroundColor: '#EDF6FF', overflow: 'hidden' }}>
      <div className="container">
        <div className="d-flex align-items-start col-lg-2 col-md-3 col-12 mb-3">
          <i className="bi bi-star-fill text-dark me-2"></i>
          <span 
            className="px-3 py-1 rounded-pill border border-dark text-dark fw-medium"
            style={{ fontSize: '0.85rem' }}
          >
            Our Service
          </span>
        </div>

        <div className="row mb-5">
          <div className="display-4 col-md-8 col-12 fw-bold text-dark mb-3 lh-1 text-start">
            Home care <br className="d-none d-md-block" /> essentials
          </div>
          <div className="col-md-4 col-12 lead text-muted mb-4 lh-base text-start" style={{fontSize: '16px'}}>
          Explore Space home care essentials - expert cleaning, plumbing, AC maintence, painting, and more, fast, reliable doorstep service.          </div>
        </div>

        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={formattedServices.length > 3}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="home-care-scroll"
        >
          {formattedServices.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCareEssentials;
