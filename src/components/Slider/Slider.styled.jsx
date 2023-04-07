import styled from "styled-components";

// container div = = = = =>
export const SliderContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 7rem;
  /* margin-bottom: 10rem; */
`;

// Arrow div = = = = =>
export const Arrow = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(115%);
  }
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

// Wrapper div = = = = =>
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 600ms ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

// Slide div = = = = =>
export const Slide = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  align-items: center;
  position: relative;
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  @media screen and (max-width: 45rem) {
    height: 34rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 100%;
  object-position: center;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  position: absolute;
  left: 10px;
  @media screen and (max-width: 45rem) {
    left: 2rem;
    padding: 0;
  }
`;

export const Title = styled.h1`
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 16px;
  font-weight: 300;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  width: 50%;
  @media screen and (max-width: 45rem) {
    font-size: 1.2rem;
    font-weight: 200;
    width: 70%;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  }
`;
