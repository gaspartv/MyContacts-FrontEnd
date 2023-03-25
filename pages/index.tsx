/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";

import { ClientContext, LoadContext } from "@/src/contexts";
import { api } from "@/src/services";
import { StyledHome } from "@/src/styles";
import {
  Header,
  EditClientModal,
  DeleteClientModal,
  NewContactModal,
  EditContactModal,
  DeleteContactModal,
} from "@/src/components";

export default function Home() {
  const { setLoad } = React.useContext(LoadContext);

  const {
    client,
    setClient,

    contacts,
    setContacts,

    newContactModel,
    setNewContactModel,

    editClientModel,
    setEditClientModel,

    editContactModel,
    setEditContactModel,

    setContactId,

    deleteContactModel,
    setDeleteContactModel,

    deleteClientModel,
    setDeleteClientModel,

    logout,
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
        setTimeout(() => {
          setLoad(false);
        }, 500);
      }
    };

    autoLogin();
  }, []);

  return (
    <>
      <Head>
        <title>My contacts - Home</title>
      </Head>
      {editClientModel && <EditClientModal />}
      {deleteClientModel && <DeleteClientModal />}
      {newContactModel && <NewContactModal />}
      {editContactModel && <EditContactModal />}
      {deleteContactModel && <DeleteContactModal />}
      <Header />
      <StyledHome>
        <div className="container">
          <div>
            <span>
              <p>{client?.name}</p>
              <p>{client?.email}</p>
              <p>{client?.tel}</p>
              <span></span>
              <img
                src="/images/edit.png"
                alt="edit icon"
                className="imgEdit"
                onClick={() => {
                  setEditClientModel(true);
                }}
              />
              <img
                src="/images/trash.png"
                alt="trash icon"
                className="imgTrash"
                onClick={() => {
                  setDeleteClientModel(true);
                }}
              />
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
                    <strong>Email:</strong> {el.email}
                  </p>
                  <p>
                    <strong>Tel:</strong> {el.tel}
                  </p>
                  <img
                    src="/images/edit.png"
                    alt="edit icon"
                    className="imgEdit"
                    onClick={() => {
                      setContactId(el);
                      setEditContactModel(true);
                    }}
                  />
                  <img
                    src="/images/trash.png"
                    alt="trash icon"
                    className="imgTrash"
                    onClick={() => {
                      setContactId(el);
                      setDeleteContactModel(true);
                    }}
                  />
                </li>
              ))}
          </ul>
        </span>
      </StyledHome>
    </>
  );
}
