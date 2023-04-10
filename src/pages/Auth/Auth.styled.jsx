import styled from "styled-components";
import bg from "../../assets/images/bg-1.webp";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: 40%;
  background-size: cover;
  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px,
    rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px,
    rgba(240, 46, 170, 0.05) 0px 25px;
  @media screen and (max-width: 60rem) {
    background-position: 65%;
  }
`;

export const AuthWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 60rem) {
    align-items: start;
  }
`;

export const Form = styled.form`
  flex: 4;
  max-width: 50rem;
  max-height: 80vh;
  width: 100%;
  height: 100%;
  margin: 2rem;
  padding: 1.5rem;
  background: #000;
  border-radius: 1rem;
  box-shadow: rgba(0, 223, 252, 0.4) 0px 10px 50px;
  /* color: black; */
  /* text-align: center; */
  display: flex;
  flex-direction: column;

  h2 {
    flex: 1;
    font-size: 2rem;
    margin: 1.5rem 0;
  }

  @media screen and (max-width: 60rem) {
    height: fit-content;
  }
`;

export const Toggler = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  position: relative;
`;

export const CheckBox = styled.input`
  width: 100%;
  height: 100%;
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 3.5rem;
  z-index: 555;
  opacity: 0;
  cursor: pointer;
`;

export const ToggleBtn = styled.div``;

export const Titles = styled.div`
  width: 100%;
  max-width: 35rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 2rem;
`;

export const Inputs = styled.div`
  flex: 5;
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.8rem;
    margin: 1.8rem 0;
    color: var(--text-secondary);
  }
`;

export const InputField = styled.div`
  width: 100%;
  box-shadow: rgba(67, 71, 85, 0.5) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border: 1px solid #371c72;
  box-shadow: rgba(149, 157, 165, 0.05) 0px 8px 15px;
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  font-size: 1.3rem;
  background-color: transparent;
  font-weight: 600;
  color: #fff;
`;

export const InputIcon = styled.img`
  width: 2rem;
  height: 2rem;
  display: block;
`;
