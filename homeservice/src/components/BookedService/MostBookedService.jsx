import React, { useMemo, useRef } from "react";
import "./MostBookedService.css";
import ReusableCard from "./reusableBookedCard";
import { getRandomImageUrl } from "../../api/imageService";

const MostBookedService = ({
  services = [],
  title = "Featured Items",
  cardLimit = 5,
}) => {
  const carouselRef = useRef(null);

  const displayServices = useMemo(() => {
    return services.slice(0, cardLimit).map((service, index) => ({
      id: service.id || index,
      title: service.title || service.name || "Service Name",
      imageUrl: getRandomImageUrl(600, 400, 990 + index),
      rating: service.rating || "4.8",
      originalPrice: service.originalPrice || "650",
      currentPrice: service.currentPrice || "550",
    }));
  }, [services, cardLimit]);

  const scrollNext = () => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth =
      container.querySelector(".service-card")?.offsetWidth || 200;

    if (container.scrollLeft + cardWidth < container.scrollWidth) {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    } else {
      container.scrollTo({ left: 0, behavior: "smooth" }); 
    }
  };

  const scrollPrev = () => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth =
      container.querySelector(".service-card")?.offsetWidth || 200;

    if (container.scrollLeft > 0) {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" }); // Loop to end
    }
  };

  if (displayServices.length === 0) return null;

  return (
    <section className="most-booked-service">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <a href="#" className="see-all-link">
            See all
          </a>
        </div>

        <div className="services-carousel-container">
          <button
            className="carousel-nav-btn carousel-nav-btn-prev"
            onClick={scrollPrev}
          >
            ‹
          </button>

          <div className="services-carousel" ref={carouselRef}>
            {displayServices.map((service) => (
              <ReusableCard key={service.id} {...service} />
            ))}
          </div>

          <button
            className="carousel-nav-btn carousel-nav-btn-next"
            onClick={scrollNext}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default MostBookedService;
