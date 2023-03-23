/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Header } from "@/src/components/header.component";
import { EditClientModal } from "@/src/components/modalEditClient.component";
import { NewContactModal } from "@/src/components/modalNewContact.component";
import { ClientContext } from "@/src/contexts/client.context";
import { LoadContext } from "@/src/contexts/load.context";
import { api } from "@/src/services";
import { StyledHome } from "@/src/styles/home.style";
import Head from "next/head";
import React from "react";

export default function Home() {
  const { setLoad } = React.useContext(LoadContext);

  const {
    client,
    setClient,
    contacts,
    setContacts,
    logout,
    newContactModel,
    setNewContactModel,
    editClientModel,
    setEditClientModel,
  } = React.useContext(ClientContext);

  React.useEffect(() => {
    const autoLogin = async () => {
      setLoad(true);

      const token: string | null = localStorage.getItem("token");

      if (!token) logout();

      try {
        const client = await api.get("/client", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const contacts = await api.get("/contacts", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setClient(client.data);

        setContacts(contacts.data);
      } catch (error) {
        logout();
      } finally {
        setLoad(false);
      }
    };

    autoLogin();
  }, []);

  return (
    <>
      <Head>
        <title>My contacts - Home</title>
      </Head>
      {newContactModel && <NewContactModal />}
      {editClientModel && <EditClientModal />}
      <Header />
      <StyledHome>
        <div className="container">
          <div>
            <span>
              <p>{client?.name}</p>
              <p>{client?.email}</p>
              <p>{client?.tel}</p>
              <button onClick={() => setEditClientModel(true)}>Edit</button>
            </span>
          </div>
        </div>
        <div className="container">
          <button onClick={() => setNewContactModel(true)}>New contact</button>
        </div>
        <span>
          <ul className="container">
            {contacts &&
              contacts.map((el) => (
                <li key={el.id}>
                  <p>
                    <strong> Name:</strong> {el.name}
                  </p>
                  <p>
                    <strong>E-mail:</strong> {el.email}
                  </p>
                  <p>
                    <strong>Tel:</strong> {el.tel}
                  </p>
                </li>
              ))}
          </ul>
        </span>
      </StyledHome>
    </>
  );
}
