import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MonthSpecialContainer = styled.div`
  width: 100%;
  padding: 2rem;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(90deg, #252550, rgba(0, 0, 0, 0));
`;

export const MonthSpecialWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 45.2rem) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const Item = styled.div`
  width: 30rem;
  height: 38rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  transition: all 0.3s ease;
  overflow: hidden;
  /* background: linear-gradient(90deg, var(--card-bg-primary), var(--card-bg-secondary)) ; */
  background: rgba(255, 255, 255, 0.08);

  @media screen and (max-width: 70rem) and (min-width: 45.2rem) {
    width: 22rem;
    height: 32rem;
  }

  &:hover {
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
      rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
      rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
    transform: translate(-1rem, 0.5rem);
  }
`;

export const ItemImage = styled.div`
  img {
    width: 100%;
    height: 18rem;
    margin-bottom: 1rem;
    object-fit: cover;
    object-position: center;
    @media screen and (max-width: 70rem) and (min-width: 45.2rem) {
      height: 14rem;
    }
  }
`;

export const ItemDetails = styled.div`
  padding-left: 1rem;
  h2 {
    margin-bottom: 1rem;
    @media screen and (max-width: 70rem) and (min-width: 45.2rem) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    height: 7rem;
    @media screen and (max-width: 70rem) and (min-width: 45.2rem) {
      font-size: 1.3rem;
      height: 6rem;
    }
  }
`;
