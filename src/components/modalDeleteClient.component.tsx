import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ClientContext, LoadContext } from "../contexts";
import { api } from "../services";
import { StyledModal } from "../styles";

export const DeleteClientModal = () => {
  const router = useRouter();

  const { setLoad } = React.useContext(LoadContext);

  const { setClient, setDeleteClientModel } = React.useContext(ClientContext);

  const sendDeleteClient = async () => {
    setLoad(true);

    try {
      const token: string | null = localStorage.getItem("token");

      if (token) {
        await api.delete("/client", {
          headers: { Authorization: `Bearer ${token}` },
        });

        toast.success("Successfully deleted.");

        setClient(null);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setTimeout(() => {
        setDeleteClientModel(false);
        router.push("/register");
        setLoad(false);
      }, 500);
    }
  };

  return (
    <StyledModal>
      <div>
        <h3>Delete my account</h3>
        <form>
          <div>
            <span>Are you sure you want to delete your account?</span>
          </div>
          <div>
            <div>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  sendDeleteClient();
                }}
              >
                Delete
              </button>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  setDeleteClientModel(false);
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
