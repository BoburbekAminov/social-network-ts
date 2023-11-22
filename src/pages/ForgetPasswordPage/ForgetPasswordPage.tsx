import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../../components/UI/Header/Header";
import { Container } from "../../components/UI/Container/Container.style";
import { Heading } from "../../components/Typography/Heading";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { StyleForgetPasswordPage } from "./ForgetPasswordPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IForgetpasswordForm {
  userphone: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const forgetpasswordFormSchema = yup.object({
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
});

export const ForgetPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgetpasswordForm>({
    resolver: yupResolver(forgetpasswordFormSchema),
    defaultValues: {
      userphone: "",
    },
  });

  console.warn("ERRORS:", errors);

  const onForgetPasswordSubmit: SubmitHandler<IForgetpasswordForm> = (data) => {
    console.log("DATA:", data);
  };
  return (
    <Container>
      <Header />
      <StyleForgetPasswordPage>
        <form onSubmit={handleSubmit(onForgetPasswordSubmit)}>
          <Heading headingText="Забыли пароль?" />
          <div className="forgetText">
            <span>Укажите свой номер телефона, чтобы получить код для сброса пароля.</span>
          </div>
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
          <Button
            isPrimary
            disabled={!!Object.keys(errors).length}
            type="submit"
            buttonText="Отправить"
          />
        </form>
      </StyleForgetPasswordPage>
    </Container>
  );
};
