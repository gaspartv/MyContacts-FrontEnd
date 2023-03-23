import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ClientContext } from "../contexts/client.context";
import { StyledModal } from "../styles/modal.style";
import { iContact } from "../interfaces";
import { schemaNewContact } from "../schemas/contact.schema";
import { LoadContext } from "../contexts/load.context";
import { api } from "../services";
import { toast } from "react-toastify";

export const NewContactModal = () => {
  const { setLoad } = React.useContext(LoadContext);

  const {
    client,
    setClient,
    contacts,
    setContacts,
    logout,
    newContactModel,
    setNewContactModel,
  } = React.useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContact>({
    resolver: yupResolver(schemaNewContact),
  });

  const sendNewContact = async (data: iContact) => {
    setLoad(true);
    try {
      const token: string | null = localStorage.getItem("token");

      if (token) {
        const contact = await api.post("/contacts", data, {
          headers: { Authorization: `Bearer ${token}` },
        });

        toast.success("contact successfully added.");

        setContacts([...contacts, contact.data]);
      }
    } catch (error: any) {
      console.log(error.response.data);
      toast.error(error.response.data.message);
    } finally {
      setTimeout(() => {
        setLoad(false);
        setNewContactModel(false);
      }, 500);
    }
  };

  return (
    <StyledModal>
      <div>
        <h3>New contact</h3>
        <form onSubmit={handleSubmit(sendNewContact)}>
          <div>
            <label>Name</label>
            <input type="text" {...register("name")} />
            <p>{errors.name && errors.name.message}</p>
          </div>
          <div>
            <label>E-mail</label>
            <input type="text" {...register("email")} />
            <p>{errors.email && errors.email.message}</p>
          </div>
          <div>
            <label>Tel</label>
            <input type="text" {...register("tel")} />
            <p>{errors.tel && errors.tel.message}</p>
          </div>
          <div>
            <div>
              <button type="submit">ADD</button>
              <button onClick={() => setNewContactModel(false)}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </StyledModal>
  );
};
