import React from "react";
import { toast } from "react-toastify";

import { ClientContext, LoadContext } from "../contexts";
import { api } from "../services";
import { StyledModal } from "../styles";

export const DeleteContactModal = () => {
  const { setLoad } = React.useContext(LoadContext);

  const { contacts, setContacts, contactId, setDeleteContactModel } =
    React.useContext(ClientContext);

  const sendDeleteContact = async () => {
    setLoad(true);

    try {
      const token: string | null = localStorage.getItem("token");

      if (token) {
        await api.delete(`/contacts/${contactId.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        toast.success("Successfully deleted contact.");

        const contactRemove = contacts.filter((el) => el.id !== contactId.id);

        setContacts([...contactRemove]);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setTimeout(() => {
        setLoad(false);
        setDeleteContactModel(false);
      }, 500);
    }
  };

  return (
    <StyledModal>
      <div>
        <h3>Delete contact</h3>
        <form>
          <div>
            <span>
              Do you want to remove <strong>{contactId.name}</strong> from your
              list?
            </span>
          </div>
          <div>
            <div>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  sendDeleteContact();
                }}
              >
                Delete
              </button>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  setDeleteContactModel(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </StyledModal>
  );
};
