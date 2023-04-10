import { Link } from "react-router-dom";
import styled from "styled-components";

export const BrandText = styled(Link)`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: 1px;

  @media screen and (max-width: 45rem) {
    font-size: 1.6rem;
  }
`;

export const HeadingPrimary = styled.h1``;

export const ButtonPrimary = styled(Link)`
  font-size: 1.6rem;
  letter-spacing: 1px;
  color: var(--text-primary);
  font-weight: 600;
  padding: 1rem 2rem;
  outline: none;
  display: inline-block;

  background: linear-gradient(
    114deg,
    var(--btn-primary) 20%,
    var(--btn-secondary) 150%
  );
  transition: all 0.3s ease !important;
  /* clip-path: polygon(0% 0%, 90% 0, 100% 30%, 100% 100%, 0 100%); */

  &:hover {
    box-shadow: rgba(50, 224, 255, 0.3) 0px 5px 15px;
    background: var(--btn-primary);
  }
`;

export const ButtonSecondary = styled.a`
  font-size: 1.6rem;
  letter-spacing: 1px;
  color: var(--text-primary);
  padding: 1rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease !important;
  margin: 1rem 0;
  display: inline-block;
  cursor: pointer;
  background: linear-gradient(
    114deg,
    var(--btn-primary) 20%,
    var(--btn-tertiary) 150%
  );

  &:hover {
    box-shadow: rgba(50, 224, 255, 0.3) 0px 5px 15px;
    background: var(--btn-tertiary);
  }
`;

export const SectionTitle = styled.div`
  width: 100%;
  padding: 2rem;
  margin-bottom: 1rem;
  text-align: center;

  img {
    width: 3rem;
    height: 3rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }
`;



export const ButtonTertiary = styled.button`
  font-size: 1.6rem;
  letter-spacing: 1px;
  color: var(--text-primary);
  padding: 1rem 2rem;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease !important;
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(114deg, var(--btn-primary) 20%, #2f58cd);

  &:hover {
    color: var(--text-primary);
    box-shadow: rgba(92, 230, 255, 0.6) 0px 5px 25px;
    background: linear-gradient(114deg, #6fffe7, #2f58cd);
  }
`;
