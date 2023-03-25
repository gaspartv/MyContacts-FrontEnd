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

  const [editClientModel, setEditClientModel] = React.useState<boolean>(false);

  const [newContactModel, setNewContactModel] = React.useState<boolean>(false);

  const [editContactModel, setEditContactModel] =
    React.useState<boolean>(false);

  const [deleteContactModel, setDeleteContactModel] =
    React.useState<boolean>(false);

  const [deleteClientModel, setDeleteClientModel] =
    React.useState<boolean>(false);

  const [contactId, setContactId] = React.useState<iClient>({} as iClient);

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
        editContactModel,
        setEditContactModel,
        contactId,
        setContactId,
        deleteContactModel,
        setDeleteContactModel,
        deleteClientModel,
        setDeleteClientModel,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
