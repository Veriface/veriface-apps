import styled from "styled-components";
import { mediaQueries } from "../themes/mediaQueries";

export const Button = styled.button<{
  background?: string;
  height?: string;
  width?: string;
  color?: string;
  boxShadow?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ color }) => color};
  border-radius: 1rem;
  padding: 1.2rem;
  border: none;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: none;
  text-transform: uppercase;
  cursor: pointer;
`;
