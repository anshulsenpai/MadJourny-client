import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 1.4rem;
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 1rem;
  }
`;
export const FooterBranding = styled(Link)`
  width: 100%;
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 25rem; */

  img {
    display: block;
    width: 6rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--text-primary);
  }
`;

export const SocialHandles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const HandlerIcon = styled(Link)`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
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
