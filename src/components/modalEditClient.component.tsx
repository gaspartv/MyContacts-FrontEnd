import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ClientContext } from "../contexts/client.context";
import { StyledModal } from "../styles/modal.style";
import { iContact, iEditClient } from "../interfaces";
import { LoadContext } from "../contexts/load.context";
import { api } from "../services";
import { toast } from "react-toastify";
import { schemaEditClient } from "../schemas/editClient.schema";

export const EditClientModal = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditClient>({
    resolver: yupResolver(schemaEditClient),
  });

  const sendEditClient = async (dataEdit: any) => {
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
        const clientEdit = await api.patch("/client", data, {
          headers: { Authorization: `Bearer ${token}` },
        });

        toast.success("Successfully edited.");

        setClient(clientEdit.data);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setTimeout(() => {
        setLoad(false);
        setEditClientModel(false);
      }, 500);
    }
  };

  return (
    <StyledModal>
      <div>
        <h3>Edit client</h3>
        <form onSubmit={handleSubmit(sendEditClient)}>
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
            <label>Password</label>
            <input type="text" {...register("password")} />
            <p>{errors.password && errors.password.message}</p>
          </div>
          <div>
            <div>
              <button type="submit">Edit</button>
              <button onClick={() => setEditClientModel(false)}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </StyledModal>
  );
};
