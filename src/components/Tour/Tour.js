import React, { useState } from "react";
import "./Tour.styles.scss";
const Tour = ({ removeTour, city, img, name, info, id }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="tour">
      <div className="tour__image">
        <img src={img} alt="tourimage" />
        <span className="tour__close" onClick={() => removeTour(id)}>
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour__info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          <span onClick={handleShow}>
            info <i className="fas fa-caret-square-down" />
          </span>
        </h5>
        {show ? <p>{info}</p> : null}
      </div>
    </div>
  );
};

export default Tour;
