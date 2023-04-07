import Slider from "../../components/Slider/Slider";
import {
  HomeContainer,
  Item,
  ItemDetails,
  ItemImage,
  MonthSpecialContainer,
  MonthSpecialWrapper,
} from "./Home.styled";
import psvr from "../../assets/images/psvr.webp";
import ps5 from "../../assets/images/ps5.webp";
import ps5Joystick from "../../assets/images/ps-joystick.webp";

import { SectionTitle } from "../../utlis.styled";
import { ButtonSecondary } from "../../utlis.styled";

const Home = () => {
  return (
    <HomeContainer>
      <Slider />
      {/* Month Special */}
      <MonthSpecialContainer>
        <SectionTitle>
          <h2>Explore PlayStation</h2>
          <p>
            Incredible games, non-stop entertainment. There's never been a
            better time to enjoy PS5
          </p>
        </SectionTitle>
        <MonthSpecialWrapper>
          {/* <img src={backgroundImage} alt="background image" /> */}
          <Item>
            <ItemImage>
              <img src={psvr} alt="PS VR image" />
            </ItemImage>
            <ItemDetails>
              <h2>PlayStation VR</h2>
              <p>Over 500 games and experiences and counting see them all</p>
              <ButtonSecondary to="/">See more</ButtonSecondary>
            </ItemDetails>
          </Item>

          <Item>
            <ItemImage>
              <img src={ps5} alt="PS VR image" />
            </ItemImage>
            <ItemDetails>
              <h2>PlayStation 5</h2>
              <p>The PS4 console, delivering awesome gaming power & incredible entertainment</p>
              <ButtonSecondary to="/">See more</ButtonSecondary>
            </ItemDetails>
          </Item>

          <Item>
            <ItemImage>
              <img src={ps5Joystick} alt="PS VR image" />
            </ItemImage>
            <ItemDetails>
              <h2>Accessories</h2>
              <p>Build your perfect gaming setup with controllers, headsets and other accessories for your PS5</p>
              <ButtonSecondary to="/">See more</ButtonSecondary>
            </ItemDetails>
          </Item>
        </MonthSpecialWrapper>
      </MonthSpecialContainer>
    </HomeContainer>
  );
};

export default Home;
