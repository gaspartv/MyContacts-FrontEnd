/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { ClientContext } from "../contexts/client.context";
import { StyledHeader } from "../styles/header.style";

export const Header = () => {
  const { logout } = useContext(ClientContext);

  return (
    <StyledHeader>
      <div className="container">
        <h1>My contacts</h1>
        <button onClick={logout}>
          Logout <span></span>
        </button>
      </div>
    </StyledHeader>
  );
};
