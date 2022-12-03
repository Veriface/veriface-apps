import { Button as ConnectButton } from "../../utils/button/button";
import styled from "styled-components";
import { FunctionComponent } from "react";
import { BtnProps } from "../../types/types";

const StyledButton = styled(ConnectButton)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 100%;
  color: #ffffff;
  background: linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%);
`;

const Button:FunctionComponent<BtnProps> = ({className, type, children}) => {
  return <StyledButton type={type} className={className}>{children}</StyledButton>;
};

export default Button;
