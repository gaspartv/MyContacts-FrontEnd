import styled from "styled-components";

export const StyledHome = styled.main`
  background-color: var(--color-black);
  margin-top: 20px;
  > span {
    > ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      background-color: var(--color-black);
      border: 1px solid var(--color-seconday);
      border-radius: 3px;
      margin-top: 15px;
      > li {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 5px;
        background-color: var(--color-black);
        border: 1px solid var(--color-seconday);
        margin: 8px;
        border-radius: 3px;
        padding: 8px;
        > p {
          color: var(--color-grey-3);
          font-size: 14px;
          letter-spacing: 1px;
        }
        :hover {
          cursor: default;
          transform: scale(1.05, 1.05);
        }
        .imgEdit {
          position: absolute;
          width: 15px;
          bottom: 4px;
          right: 25px;
          cursor: pointer;
        }
        .imgTrash {
          position: absolute;
          width: 15px;
          bottom: 4px;
          right: 4px;
          cursor: pointer;
        }
      }
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    > div {
      border: 1px solid var(--color-third);
      border-radius: 3px;
      > span {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: default;
        height: 50px;
        > p {
          padding: 3px 8px;
          color: var(--color-grey-3);
          letter-spacing: 1px;
        }
        > span {
          min-width: 50px;
        }
        .imgEdit {
          position: absolute;
          width: 15px;
          bottom: 18px;
          right: 25px;
          cursor: pointer;
        }
        .imgTrash {
          position: absolute;
          width: 15px;
          bottom: 18px;
          right: 4px;
          cursor: pointer;
        }
      }
    }
    > button {
      display: flex;
      align-self: flex-end;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
      padding: 6px 10px;
      background-color: var(--color-fourth);
      color: var(--color-grey-3);
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: uppercase;
      border: 1px solid var(--color-fourth);
      border-radius: 3px;
      transform: translate(0);
      overflow: hidden;
      cursor: pointer;
      width: 140px;
      box-shadow: 1px 1px 5px 0px black;
      margin-right: 8px;
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
        color: var(--color-white);
      }
    }
  }
`;
