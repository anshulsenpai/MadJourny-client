import {
  AuthContainer,
  AuthWrapper,
  CheckBox,
  Form,
  Input,
  InputField,
  InputIcon,
  Inputs,
  Titles,
  ToggleBtn,
  Toggler,
} from "./Auth.styled";
import logo from "../../assets/logo.png";
import name from "../../assets/user.svg";
import email from "../../assets/at-sign.svg";
import phoneNo from "../../assets/smartphone.svg";
import address from "../../assets/map-pin.svg";
import password from "../../assets/lock.svg";

import bg from "../../assets/images/bg-1.webp";
import { useState } from "react";
import { ButtonTertiary } from "../../utlis.styled";

const Auth = () => {
  const isLoading = false;
  const [indicator, setIndicator] = useState(false);
  console.log(indicator);
  const handleCheckBox = (e) => {
    setIndicator(e.target.checked);
  };

  return (
    <AuthContainer
      style={{
        backgroundImage: `linear-gradient(55deg, 
      rgba(0, 0, 0, 0.25), rgba(18, 5, 34, 0.5)), url(${bg})`,
      }}
    >
      <Toggler>
        <Titles>
          <h3 className={!indicator && "highligh--title"}>Sign up</h3>
          <h3 className={indicator && "highligh--title"}>Login</h3>
        </Titles>

        <CheckBox onChange={(e) => handleCheckBox(e)} type="checkbox" />
        <ToggleBtn
          className={indicator ? "active-indicator" : "indicator"}
        ></ToggleBtn>
      </Toggler>
      <AuthWrapper>
        {/* Login Login */}
        {!indicator ? (
          <Form>
            <h2>Sign up</h2>
            <Inputs>
              <InputField>
                <InputIcon src={name} alt="name" />
                <Input type="text" autoComplete="off" placeholder="Name" />
              </InputField>
              <InputField>
                <InputIcon src={email} alt="email" />
                <Input type="email" autoComplete="off" placeholder="Email" />
              </InputField>
              <InputField>
                <InputIcon src={phoneNo} alt="Phonen no" />
                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="Phone number"
                />
              </InputField>
              <InputField>
                <InputIcon src={address} alt="Address" />
                <Input
                  type="textarea"
                  autoComplete="off"
                  placeholder="Address"
                />
              </InputField>
              <InputField>
                <InputIcon src={password} alt="Password" />
                <Input
                  type="password"
                  autoComplete="off"
                  placeholder="Password"
                />
              </InputField>
              <InputField>
                <InputIcon src={password} alt="Confirm Password" />
                <Input
                  type="password"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
              </InputField>
            </Inputs>

            <ButtonTertiary>
              {" "}
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </ButtonTertiary>
          </Form>
        ) : (
          <Form>
            <h2>Log in</h2>
            <Inputs>
              <InputField>
                <InputIcon src={email} alt="email" />
                <Input type="email" autoComplete="off" placeholder="Email" />
              </InputField>
              <InputField>
                <InputIcon src={password} alt="Password" />
                <Input
                  type="password"
                  autoComplete="off"
                  placeholder="Password"
                />
              </InputField>
            <label>Forgot password ?</label>
            </Inputs>
            <ButtonTertiary>
              {" "}
              {isLoading ? <span className="loading-spinner"></span> : "Log in"}
            </ButtonTertiary>
          </Form>
        )}
      </AuthWrapper>
    </AuthContainer>
  );
};

export default Auth;
