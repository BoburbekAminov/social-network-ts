import React, { useEffect } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../../components/UI/Header/Header";
import { Container } from "../../components/UI/Container/Container.style";
import { Heading } from "../../components/Typography/Heading";
import { RegistrationInfo } from "../../components/Registration/RegistrationInfo";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { StyleReagistrationPage } from "./ReagistrationPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../store/API/authApi";

interface IRegistrationForm {
  username: string;
  userphone: string;
  userpassword: string;
  useremail: string;
  usercity: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержат ")
    .required("Обязательное поле!"),
  useremail: yup.string().email().required("Обязательное поле!"),
  usercity: yup.string().required("Обязательное поле!"),
});

export const ReagistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      useremail: "",
      usercity: "",
      userphone: "",
      userpassword: "",
    },
  });

  // console.warn("ERRORS:", errors);
  const navigate = useNavigate();

  const [registerUser, { data: userData }] = useRegisterUserMutation();

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    registerUser({
      email: data.useremail,
      password: data.userpassword,
      name: data.username,
      phone_number: data.userphone,
      user_city: data.usercity,
    });
    // console.log("data", data)
  };

  useEffect(() => {
    // console.log(userData)

    if (userData?.user_id) {
      navigate("/");
    }
  }, [userData, navigate]);
  return (
    <Container>
      <Header />
      <StyleReagistrationPage>
        <Heading headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.username ? true : false}
                errorMessage={errors.username?.message}
                type="text"
                placeholder="Имя и фамилия"
                {...field}
              />
            )}
          />
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
            name="usercity"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.usercity ? true : false}
                errorMessage={errors.usercity?.message}
                type="text"
                placeholder="страна"
                {...field}
              />
            )}
          />
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
        <div className="textReagistr">
          <span>
            Уже есть аккаунт? <a href="./login">Войти</a>
          </span>
          <p>Войти с помощью</p>
        </div>
        <RegistrationInfo />
      </StyleReagistrationPage>
    </Container>
  );
};
