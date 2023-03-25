import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { ClientContext, LoadContext } from "../contexts";
import { iEditContact } from "../interfaces";
import { schemaEditContact } from "../schemas";
import { api } from "../services";
import { StyledModal } from "../styles";

export const EditContactModal = () => {
  const { setLoad } = React.useContext(LoadContext);

  const { contacts, setContacts, setEditContactModel, contactId } =
    React.useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditContact>({
    resolver: yupResolver(schemaEditContact),
  });

  const sendEditContact = async (dataEdit: any) => {
    setLoad(true);

    const data = {} as any;

    for (const key in dataEdit) {
      if (dataEdit[key]) {
        data[key] = dataEdit[key];
      }
    }

    try {
      const token: string | null = localStorage.getItem("token");

      if (token) {
        const contact = await api.patch(`/contacts/${contactId.id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });

        toast.success("contact successfully added.");

        const contactsRemove = contacts.filter((el) => el.id !== contactId.id);

        setContacts([contact.data, ...contactsRemove]);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setTimeout(() => {
        setLoad(false);
        setEditContactModel(false);
      }, 500);
    }
  };

  return (
    <StyledModal>
      <div>
        <h3>Edit contact</h3>
        <form onSubmit={handleSubmit(sendEditContact)}>
          <div>
            <label>Name</label>
            <input
              type="text"
              {...register("name")}
              placeholder={contactId.name}
            />
            <p>{errors.name && errors.name.message}</p>
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="text"
              {...register("email")}
              placeholder={contactId.email}
            />
            <p>{errors.email && errors.email.message}</p>
          </div>
          <div>
            <label>Tel</label>
            <input
              type="number"
              {...register("tel")}
              placeholder={contactId.tel}
            />
            <p>{errors.tel && errors.tel.message}</p>
          </div>
          <div>
            <div>
              <button type="submit">Edit</button>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  setEditContactModel(false);
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
