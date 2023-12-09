import React, { useEffect } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Heading } from "../../components/Typography/Heading";
import { StlyledLink } from "../../components/Typography/StlyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/Registration/RegistrationInfo";
import { StyleLoginPage } from "./LoginPage.style";
import { Header } from "../../components/UI/Header/Header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/API/authApi";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержат ")
    .required("Обязательное поле!"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate();

  const [loginUser, { data: userData }] = useLoginUserMutation();

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    loginUser({ email: data.useremail, password: data.userpassword });
  };

  useEffect(() => {
    // console.log(userData)

    if (userData?.user_id) {
      navigate("/profile");
    }
  }, [userData, navigate]);

  return (
    <Container>
      <StyleLoginPage>
        <Header />
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.useremail ? true : false}
                errorMessage={errors.useremail?.message}
                type="email"
                placeholder="Почта"
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userpassword ? true : false}
                errorMessage={errors.userpassword?.message}
                type="password"
                placeholder="Пароль"
                {...field}
              />
            )}
          />
          <Button
            isPrimary
            disabled={!!Object.keys(errors).length}
            type="submit"
            buttonText="Войти"
          />
        </form>
        <StlyledLink to="/forgetpassword" linkText="Забыли пароль?" />
        <div className="textLogin">
          <span>
            У вас нет аккаунта? <a href="./reagistration">Зарегистрироваться</a>
          </span>
          <p>Войти с помощью</p>
        </div>
        <RegistrationInfo />
      </StyleLoginPage>
    </Container>
  );
};
