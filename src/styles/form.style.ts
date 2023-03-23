import Link from "next/link";
import styled from "styled-components";
import { animationEntring } from "./animations.style";

export const StyledForm = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  > div {
    width: 300px;
    background-color: var(--color-white);
    padding: 20px;
    border-radius: 4px;
    border: 2px solid var(--color-third);
    > form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      > div {
        display: flex;
        flex-direction: column;
        position: relative;
        > label {
          padding-left: 2px;
          font-size: 14px;
          letter-spacing: 1px;
        }
        > input {
          padding: 12px 8px;
          border-radius: 2px;
          border: 1px solid #00000080;
        }
        > p {
          font-size: 11px;
          height: 12px;
          color: var(--color-red);
          text-align: start;
          padding-left: 2px;
        }
        > span {
          position: absolute;
          right: 8px;
          top: 27px;
          cursor: pointer;
          opacity: 0.5;
        }
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  margin-left: 5px;
  position: relative;
  font-size: 14px;
  text-decoration: none;
  color: var(--color-grey-2);
  font-weight: 600;
  cursor: pointer;
  width: 210px;
  text-align: center;
  :hover {
    color: var(--color-grey-1);
  }
  :hover span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--color-seconday);
    animation: ${animationEntring} 0.2s linear;
  }
`;
