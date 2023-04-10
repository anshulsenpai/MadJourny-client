import React, { useState } from "react";
import {
  BrandIcon,
  Branding,
  Header,
  MenuBars,
  NavActions,
  NavItem,
  NavList,
} from "./Navbar.styled";
import logo from "../../assets/logo.png";
import { BrandText, ButtonPrimary } from "../../utlis.styled";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const handleMenuBars = () => {
    setIsActive((prev) => !prev);
  };
  console.log(isActive);
  return (
    <Header>
      <Branding>
        <BrandIcon src={logo} alt="logo" />
        <BrandText to="/">MadJourney</BrandText>
      </Branding>
      <NavList className={isActive ? "isActive" : null}>
        {/* Navigation items here */}
        <NavItem onClick={handleMenuBars}>
          <Link to="/">
            <h5>Home</h5>
          </Link>
        </NavItem>
        <NavItem onClick={handleMenuBars}>
          <Link to="/shop">
            <h5>Shop</h5>
          </Link>
        </NavItem>
        <NavItem onClick={handleMenuBars}>
          <Link to="/blogs">
            <h5>Blogs</h5>
          </Link>
        </NavItem>
        <NavItem onClick={handleMenuBars}>
          <Link to="/about">
            <h5>About</h5>
          </Link>
        </NavItem>
      </NavList>
      <NavActions>
        <ButtonPrimary to="/auth">Sign up</ButtonPrimary>
      </NavActions>
      <MenuBars onClick={handleMenuBars}>
        {isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </MenuBars>
    </Header>
  );
}
