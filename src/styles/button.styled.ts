import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--color-fourth);
  color: var(--color-grey-3);
  font-weight: 400;
  height: 50px;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 16px 0;
  border: 1px solid var(--color-fourth);
  border-radius: 8px;
  transform: translate(0);
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  box-shadow: 1px 1px 5px 0px black;
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
`;
