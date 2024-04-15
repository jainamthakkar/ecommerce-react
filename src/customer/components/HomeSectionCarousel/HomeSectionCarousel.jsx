import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({sectionName}) => {
  const [activeIndex, seetActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1.3 },
    720: { items: 3.5 },
    1024: { items: 5 },
  };

  const slidePrev = () => seetActiveIndex(activeIndex - 1);
  const slideNext = () => seetActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => seetActiveIndex(item);

  const items = [1, {}, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
    <HomeSectionCard key={item} />
  ));

  return (
    <div className="lg:px-8 px-4 border relative">

    <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>

      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
      </div>

      {activeIndex !== 5 && <Button
        variant="contained"
        className="z-50 bg-white"
        onClick={slideNext}
        sx={{
          position: "absolute",
          top: "50%",
          left: "0rem",
          transform: "rotate(-90deg)",
          bgcolor: "white",
        }}
        aria-label="previous"
      >
        <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(90deg)", color: "black" }}
        />
      </Button>}

      {activeIndex !== 0 &&  <Button
        variant="contained"
        className="z-50 bg-white"
        onClick={slidePrev}
        sx={{
          position: "absolute",
          top: "50%",
          right: "0rem",
          transform: "rotate(-90deg)",
          bgcolor: "white",
        }}
        aria-label="next"
      >
        <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(-90deg)", color: "black" }}
        />
      </Button>}
    </div>
  );
};

export default HomeSectionCarousel;
