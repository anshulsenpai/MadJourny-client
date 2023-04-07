import React from "react";
import {
  FooterBranding,
  FooterContainer,
  HandlerIcon,
  SocialHandles,
} from "./Footer.styled";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBranding to="/">
        <img src={logo} alt="brand logo" />
        <h2>MadJourney</h2>
      </FooterBranding>
      <p>This website is designed and developed by Anshul Kulkarni</p>
      <SocialHandles>
        <HandlerIcon href="#">
          <svg
            id="SvgjsSvg1041"
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
          >
            <defs id="SvgjsDefs1042"></defs>
            <g id="SvgjsG1043">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="22"
                height="22"
              >
                <path
                  d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
                  fill="#ffffff"
                  className="color000 svgShape"
                ></path>
              </svg>
            </g>
          </svg>
        </HandlerIcon>
        <HandlerIcon href="#">
          <svg
            id="SvgjsSvg1011"
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
          >
            <defs id="SvgjsDefs1012"></defs>
            <g id="SvgjsG1013">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 5 1036 990"
                width="22"
                height="22"
              >
                <path
                  d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"
                  fill="#ffffff"
                  className="color000 svgShape"
                ></path>
              </svg>
            </g>
          </svg>
        </HandlerIcon>
        <HandlerIcon href="#">
          <svg
            id="SvgjsSvg1026"
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
          >
            <defs id="SvgjsDefs1027"></defs>
            <g id="SvgjsG1028">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="22"
                height="22"
              >
                <path
                  d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
                  fill="#ffffff"
                  className="color000 svgShape"
                ></path>
              </svg>
            </g>
          </svg>
        </HandlerIcon>
      </SocialHandles>
    </FooterContainer>
  );
};

export default Footer;
