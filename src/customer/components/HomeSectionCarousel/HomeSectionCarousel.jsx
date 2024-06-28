import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomeSectionCarousel = ({ sectionName, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1.3 },
    720: { items: 3.5 },
    1024: { items: 5 }
  };

  // const slidePrev = () => {
  //   activeIndex == 0
  //     ? setActiveIndex(items.length - 1)
  //     : setActiveIndex(activeIndex - 2);
  // };

  // const slideNext = () => {
  //   activeIndex == items.length - 1
  //     ? setActiveIndex(0)
  //     : setActiveIndex(activeIndex + 2);
  // };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <Button
        sx={{
          position: "absolute",
          top: "45%",
          right: "0rem",
          transform: "rotate(-90deg)",
          bgcolor: "#e8ebfa"
        }}
        disabled={isDisabled}
      >
        <span style={{ display: 'inline-block', transform: 'rotate(90deg)' }}>
          &#9654; {/* Unicode for right arrow */}
        </span>
      </Button>
    );
  };
  
  const renderPrevButton = ({ isDisabled }) => {
    return (
      <Button
        sx={{
          position: "absolute",
          top: "45%",
          left: "0rem",
          transform: "rotate(-90deg)",
          bgcolor: "#e8ebfa",
        }}
        disabled={isDisabled}
      >
        <span style={{ display: 'inline-block', transform: 'rotate(90deg)' }}>
          &#9664; {/* Unicode for left arrow */}
        </span>
      </Button>
    );
  };

  // const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="lg:px-8 px-4 border relative">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>

      <div className="relative p-5">
        {console.log(activeIndex, "before render")}
        {/* <AliceCarousel
          items={items}
          // disableButtonsControls
          responsive={responsive}
          disableDotsControls  
          // onSlideChanged={syncActiveIndex}
          // activeIndex={activeIndex}
        /> */}

        {/* {activeIndex !== items.length-5 && (
        <Button
          variant="contained"
          className="z-50 bg-red-500"
          onClick={slidePrev}
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
        </Button>
      )}

      {activeIndex !== 0 && (
        <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
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
        </Button>
      )} */}
        <AliceCarousel
          mouseTracking
          disableDotsControls
          // disableButtonsControls
          // activeIndex={activeIndex}
          items={items}
          responsive={responsive}
          controlsStrategy="responsive"
          autoPlay={true}
          autoPlayInterval={5000}
          infinite={true}
          keyboardNavigation={true}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
