import styled from "styled-components";
import { animationEntring } from "./animations.style";

export const StyledHeader = styled.header`
  background-color: var(--color-fourth);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    padding: 0 12px;
    > h1 {
      font-size: 22px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
      color: var(--color-grey-3);
      cursor: default;
    }

    > button {
      background-color: transparent;
      border: none;
      margin-left: 5px;
      position: relative;
      font-size: 16px;
      letter-spacing: 1px;
      text-decoration: none;
      color: var(--color-grey-2);
      font-weight: 600;
      cursor: pointer;
      text-align: center;
      :hover {
        color: var(--color-white);
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
    }
  }
`;
