import React, { useState } from "react";
import Tour from "../Tour/Tour";
import "./Tourlist.styles.scss";
import { tourData } from "../../tourData";
const TourList = () => {
  const [tours, setTours] = useState(tourData);

  const removeTour = id => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div className="tourlist ">
      {tours.map(tour => {
        return (
          <div>
            <Tour
              id={tour.id}
              img={tour.img}
              name={tour.name}
              info={tour.info}
              city={tour.city}
              removeTour={removeTour}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TourList;
