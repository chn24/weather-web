import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Hourly from "./Hourly";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const ResultContent3 = ({ curTemp }) => {
  const hourlyRef = useRef(null);

  const handleLeft = () => {
    hourlyRef.current.scrollLeft -= 150;
  };

  const handleRight = () => {
    hourlyRef.current.scrollLeft += 150;
  };

  console.log("result 3");

  return (
    <div className="result-current-3 result-current-box">
      <div className="result-current-3-btnBox">
        <Button
          variant="light"
          className="result-current-3-btn"
          onClick={handleLeft}
        >
          <BsArrowLeftCircle width={"100%"} />
        </Button>
      </div>
      <div ref={hourlyRef} className="result-current-hourlyBox">
        {curTemp?.days[0]?.hours.map((data) => (
          <Hourly data={data} key={data.datetime} />
        ))}
      </div>
      <div className="result-current-3-btnBox">
        <Button
          variant="light"
          className="result-current-3-btn"
          onClick={handleRight}
        >
          <BsArrowRightCircle width={"100%"} />
        </Button>
      </div>
    </div>
  );
};

export default ResultContent3;
