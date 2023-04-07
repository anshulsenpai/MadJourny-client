import styled from "styled-components";

export const Header = styled.header`
  z-index: 10000;
  width: 100%;
  height: 7.5rem;
  background-color: var(--bg-tertiary);
  box-shadow: rgba(0, 128, 255, 0.05) 0px 8px 35px;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;

  @media screen and (max-width: 45rem) {
    padding: 1rem;
  }
`;

export const Branding = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 1rem;
`;

export const BrandIcon = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  object-position: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 45rem) {
    font-size: 6rem;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.3s ease;

  @media screen and (max-width: 45rem) {
    height: 40vh !important;
    transition: all 0.3s ease;
    background: var(--bg-tertiary);
    position: absolute;
    align-items: start;
    top: 7rem;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
    padding: 1rem 2rem;
    height: fit-content;
    overflow: hidden;
    transform: translateY(-150%);
    z-index: 100;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  padding: 1rem 2rem;

  h5 {
    color: white;
    font-weight: 500;
  }
  @media screen and (max-width: 45rem) {
    border-bottom: 1px solid var(--text-secondary);
  }
`;

export const NavActions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

export const MenuBars = styled.div`
  display: none;

  @media screen and (max-width: 45rem) {
    width: 6rem;
    height: 6rem;
    margin-left: 1rem;
    justify-items: center;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 7rem;
  }
`;


