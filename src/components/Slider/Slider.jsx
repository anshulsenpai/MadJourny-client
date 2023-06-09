import React, { useEffect, useState } from "react";
import { SliderData } from "../../APIs/Data";
import { ButtonPrimary } from "../../utlis.styled";
import { Arrow, Desc, Image, ImgContainer, InfoContainer, Slide, SliderContainer, Title, Wrapper } from "./Slider.styled";

const SliderDataLength = SliderData.length;

let count = 0;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "back") {
      slideIndex === 0
        ? setSlideIndex(SliderDataLength - 1)
        : setSlideIndex((prevIndex) => prevIndex - 1);
    } else {
      slideIndex === SliderDataLength - 1
        ? setSlideIndex(0)
        : setSlideIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleAutoSlider = () => {
    count = (count + 1) % SliderDataLength;
    setSlideIndex(count);
  };

  useEffect(() => {
    setInterval(() => {
      handleAutoSlider();
    }, 6000);
  }, []);

  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => handleArrow("back")}>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderData?.map((data) => (
          <Slide key={data.id}>
            <ImgContainer>
              <Image loading="lazy" src={data.img} alt={data.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{data.title}</Title>
              <Desc style={{ marginBottom: "1rem" }}>{data.desc}</Desc>
              <ButtonPrimary to="/">SHOW NOW</ButtonPrimary>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleArrow("next")}>
      </Arrow>
    </SliderContainer>
  );
};

export default Slider;
