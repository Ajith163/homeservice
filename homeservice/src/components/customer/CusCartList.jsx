import React, { useMemo } from "react";
import CardImageCover from "./ReusableCusSection.jsx";
import { getRandomImageUrl } from "../../api/imageService.js";

const ServiceShowcase = ({ services = [], cardLimit = 3 }) => {
  const formattedData = useMemo(() => {
    if (!services || services.length === 0) {
      return [];
    }
    
    return services
      .slice(0, cardLimit)
      .map((item, index) => ({
        id: item.id,
        title: item.title || "Untitled Service",
        subtitle: "Professional & reliable",
        imageUrl: getRandomImageUrl(600, 400, 1015 + index),
        isSplit: index === 1,
        showBorder: index === 0,
      }));
  }, [services, cardLimit]);

  if (formattedData.length === 0) {
    return null;
  }

  return (
    <section className="pt-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {formattedData.map((service) => (
            <CardImageCover key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
