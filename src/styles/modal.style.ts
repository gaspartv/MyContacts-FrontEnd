import styled from "styled-components";
import { animationFadeIn } from "./animations.style";

export const StyledModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 400px;
  background-color: #00000099;
  color: var(--color-grey-3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  cursor: default;
  > div {
    animation: ${animationFadeIn} 0.4s ease-out;
    width: 350px;
    background-color: var(--color-black);
    border: 1px solid var(--color-primary);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 2px 2px 5px 1px black;
    > h3 {
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
      border-bottom: 1px solid var(--color-third);
      padding: 5px 0;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 22px;
      font-weight: 400;
      text-align: center;
    }
    > form {
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      > div {
        display: flex;
        flex-direction: column;
        position: relative;
        > label {
          height: 10px;
          font-size: 11px;
          letter-spacing: 1px;
          padding-left: 5px;
          padding-bottom: 2px;
        }
        > input {
          margin-top: 3px;
          padding: 8px;
          border: none;
          color: var(--color-black);
          letter-spacing: 1px;
          border-radius: 3px;
          background-color: var(--color-grey-3);
          ::placeholder {
            color: var(--color-grey-1);
          }
          :focus {
            outline: 1px solid var(--color-fourth);
            ::placeholder {
              border: none;
            }
          }
        }

        > p {
          height: 10px;
          font-size: 9px;
          color: var(--color-red);
        }

        > div {
          display: flex;
          align-items: center;
          height: 50px;
          gap: 10px;
          > button {
            transition: 0.3s;
            width: 100%;
            padding: 8px;
            margin-top: 15px;
            border-radius: 4px;
            border: none;
            font-size: 13px;
            background-color: var(--color-fourth);
            color: var(--color-grey-3);
            cursor: pointer;
            transform: translate(0);
            overflow: hidden;
            box-shadow: 2px 2px 5px 1px black;
            letter-spacing: 2px;
            ::before {
              content: "";
              position: absolute;
              background: var(--color-seconday);
              width: 8px;
              top: 0;
              bottom: 0;
              left: -32px;
              transform: rotate(-16deg);
              filter: blur(6px);
            }
            :hover::before {
              left: calc(100% + 32px);
              transition: 0.75s;
            }
            :hover {
              font-weight: 600;
              color: var(--color-white);
            }
          }
        }
      }
    }
  }
`;
