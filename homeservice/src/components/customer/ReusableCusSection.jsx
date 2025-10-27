import React from "react";
import CustomerSatisfaction from "./CustomerSatisfaction";

const CardImageCover = ({ title, subtitle, imageUrl, isSplit = false}) => {
 

  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <div className="card h-100 shadow-sm overflow-hidden rounded-3 p-0 border-0" >
        <div
          className="card-img-top position-relative"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isSplit ? "200px" : "300px",
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))" }}
          ></div>

          <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white">
            <h5 className="fw-bold mb-2 text-start">{title}</h5>
          </div>
        </div>

        {isSplit && (
          <div className="card-body d-flex flex-column pt-2 p-0">
            <CustomerSatisfaction />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardImageCover;
