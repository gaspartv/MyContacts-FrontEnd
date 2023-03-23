/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iLogin } from "@/src/interfaces";
import { schemaLogin } from "@/src/schemas/login.schema";
import { LoadContext } from "@/src/contexts/load.context";
import { api } from "@/src/services";
import { toast } from "react-toastify";
import { ClientContext } from "@/src/contexts/client.context";
import { StyledLink, StyledForm } from "@/src/styles/form.style";
import { StyledButton } from "@/src/styles/button.styled";

const LoginPage = () => {
  const { setLoad } = React.useContext(LoadContext);

  const { setClient } = React.useContext(ClientContext);

  const [visiblePassword, setVisiblePassword] = React.useState<boolean>(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(schemaLogin),
  });

  const sendLogin = async ({ email, password }: iLogin): Promise<void> => {
    setLoad(true);

    try {
      const { data } = await api.post("/login", { email, password });

      toast.success("Successful login.");

      localStorage.setItem("token", data.token);

      setClient(data.client);

      router.push("/");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setTimeout(() => {
        setLoad(false);
      }, 500);
    }
  };

  const changeVisiblePassword = (): void => {
    visiblePassword ? setVisiblePassword(false) : setVisiblePassword(true);
  };

  return (
    <>
      <Head>
        <title>My contacts - Login</title>
      </Head>
      <StyledForm>
        <div>
          <form onSubmit={handleSubmit(sendLogin)}>
            <div>
              <label>E-mail</label>
              <input type="text" {...register("email")} />
              <p>{errors.email && errors.email.message}</p>
            </div>

            <div>
              <label>Password</label>
              <input
                type={visiblePassword ? "text" : "password"}
                {...register("password")}
              />
              <p>{errors.password && errors.password.message}</p>
              <span onClick={() => changeVisiblePassword()}>
                <img
                  src={
                    visiblePassword
                      ? "/images/invisible.png"
                      : "/images/visible.png"
                  }
                  alt="Visible password"
                />
              </span>
            </div>

            <div>
              <StyledLink href="/register">
                Dont have an account? Sign up
                <span></span>
              </StyledLink>
            </div>

            <div>
              <StyledButton type="submit">Login</StyledButton>
            </div>
          </form>
        </div>
      </StyledForm>
    </>
  );
};

export default LoginPage;
