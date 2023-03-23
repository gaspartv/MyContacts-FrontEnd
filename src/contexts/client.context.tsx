import { useRouter } from "next/router";
import React from "react";
import { iClient, iClientContext, iContextProps } from "../interfaces";
import { LoadContext } from "./load.context";

export const ClientContext = React.createContext({} as iClientContext);

const ClientProvider = ({ children }: iContextProps) => {
  const { setLoad } = React.useContext(LoadContext);

  const router = useRouter();

  const [client, setClient] = React.useState<iClient | null>(null);

  const [contacts, setContacts] = React.useState<iClient[]>([]);

  const [newContactModel, setNewContactModel] = React.useState<boolean>(false);

  const [editClientModel, setEditClientModel] = React.useState<boolean>(false);

  const logout = () => {
    setClient(null);
    localStorage.removeItem("token");
    router.push("/login");
    setLoad(false);
  };

  return (
    <ClientContext.Provider
      value={{
        client,
        setClient,
        logout,
        contacts,
        setContacts,
        newContactModel,
        setNewContactModel,
        editClientModel,
        setEditClientModel,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
