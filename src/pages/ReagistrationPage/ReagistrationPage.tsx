import React from "react";
import { Header } from "../../components/UI/Header/Header";
import { Container } from "../../components/UI/Container/Container.style";
import { Heading } from "../../components/Typography/Heading";
import { RegistrationInfo } from "../../components/Registration/RegistrationInfo";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { StyleReagistrationPage } from "./ReagistrationPage.style";

export const ReagistrationPage = () => {
  return (
    <Container>
      <Header />
      <StyleReagistrationPage>
        <Heading headingText="Регистрация" />
        <form action="#">
          <Input
            isError={false}
            errorMessage="Имя и фамилия"
            type="text"
            placeholder="Имя и фамилия"
          />
          <Input
            isError={false}
            errorMessage="Ошибка"
            type="tel"
            placeholder="Номер телефона"
          />
          <Input
            isError={false}
            errorMessage="Неверный пароль!"
            type="password"
            placeholder="Пароль"
          />
          <Button isPrimary buttonText="Войти" />
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
