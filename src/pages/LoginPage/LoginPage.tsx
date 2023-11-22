import React from "react";
import { Heading } from "../../components/Typography/Heading";
import { StlyledLink } from "../../components/Typography/StlyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/Registration/RegistrationInfo";
import { StyleLoginPage } from "./LoginPage.style";
import { Header } from "../../components/UI/Header/Header";

export const LoginPage = () => {
  return (
    <Container>
      <StyleLoginPage>
        <Header />
        <Heading headingText="Авторизация" />
        <form action="#">
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
