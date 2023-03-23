import React from "react";
import { iClient, iClientContext, iContextProps } from "../interfaces";

export const ClientContext = React.createContext({} as iClientContext);

const ClientProvider = ({ children }: iContextProps) => {
  const [client, setClient] = React.useState<iClient | null>(null);

  return (
    <ClientContext.Provider
      value={{
        client,
        setClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
