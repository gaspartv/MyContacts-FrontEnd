/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoadContext } from "@/src/contexts";
import { iRegister } from "@/src/interfaces";
import { schemaRegister } from "@/src/schemas";
import { api } from "@/src/services";
import { StyledButton, StyledForm, StyledLink } from "@/src/styles";

const RegisterPage = () => {
  const { setLoad } = React.useContext(LoadContext);

  const router = useRouter();

  const [visiblePassword, setVisiblePassword] = React.useState<boolean>(false);

  const [visibleRepeatPassword, setVisibleRepeatPassword] =
    React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({ resolver: yupResolver(schemaRegister) });

  const sendRegister = async (data: iRegister): Promise<void> => {
    setLoad(true);

    try {
      await api.post("/client", data);
      toast.success("Successful registration created!");
      router.push("/login");
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

  const changeVisibleRepeatPassword = (): void => {
    visibleRepeatPassword
      ? setVisibleRepeatPassword(false)
      : setVisibleRepeatPassword(true);
  };

  return (
    <>
      <Head>
        <title>My contacts - Register</title>
      </Head>
      <StyledForm>
        <div>
          <form onSubmit={handleSubmit(sendRegister)}>
            <div>
              <label>Name</label>
              <input type={"text"} {...register("name")} />
              <p>{errors.name && errors.name.message}</p>
            </div>

            <div>
              <label>E-mail</label>
              <input type="text" {...register("email")} />
              <p>{errors.email && errors.email.message}</p>
            </div>

            <div>
              <label>Tel</label>
              <input type="number" {...register("tel")} />
              <p>{errors.tel && errors.tel.message}</p>
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
              <label>Repeat password</label>
              <input
                type={visibleRepeatPassword ? "text" : "password"}
                {...register("repeatPassword")}
              />
              <p>{errors.repeatPassword && errors.repeatPassword.message}</p>
              <span onClick={() => changeVisibleRepeatPassword()}>
                <img
                  src={
                    visibleRepeatPassword
                      ? "/images/invisible.png"
                      : "/images/visible.png"
                  }
                  alt="Visible password"
                />
              </span>
            </div>

            <div>
              <StyledLink href="/login">
                Dont have an account? Sign up<span></span>
              </StyledLink>
            </div>

            <div>
              <StyledButton type="submit">Register</StyledButton>
            </div>
          </form>
        </div>
      </StyledForm>
    </>
  );
};

export default RegisterPage;
