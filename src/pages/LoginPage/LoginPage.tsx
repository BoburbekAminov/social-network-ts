import React from "react";
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

interface ILoginForm {
  userphone: string;
  userpassword: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const loginFormSchema = yup.object({
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
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
      userphone: "",
      userpassword: "",
    },
  });

  console.warn("ERRORS:", errors);

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log("DATA:", data);
  };

  return (
    <Container>
      <StyleLoginPage>
        <Header />
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="userphone"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userphone ? true : false}
                errorMessage={errors.userphone?.message}
                type="tel"
                placeholder="Номер телефона"
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
