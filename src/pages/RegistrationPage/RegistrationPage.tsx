import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { StyledRegistrationPage } from "./RegistrationPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { setUser } from "../../store/slices/authSlice";
import { useRegisterUserMutation } from "../../store/API/authApi";

interface IRegistrationaForm {
  username: string;
  userphone: string;
  userpassword: string;
  useremail: string;
  usercity: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationSchema = yup.object({
  // username: value
  username: yup.string().required("Обязательное поле!"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекские номер телефона!")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать минимум 4 символа!")
    .required("Обязательное поле!"),
  useremail: yup.string().email().required("Обязательное поле!"),
  usercity: yup.string().required("Обязательное поле!"),
});

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userSlice.user);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationaForm>({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      username: "",
      userphone: "",
      userpassword: "",
      useremail: "",
      usercity: "",
    },
  });
  console.log("ERRORS: ", errors);

  const [registerUser, { data: userData }] = useRegisterUserMutation();

  const onRegistrationSubmit: SubmitHandler<IRegistrationaForm> = (data) => {
    console.error("Form submitted!");
    console.log("DATA: ", data);
    dispatch(setUser(data.username));
    navigate("/");
    registerUser({
      name: data.username,
      email: data.useremail,
      phone_number: data.userphone,
      password: data.userpassword,
      user_city: data.usercity,
    });
  };
  return (
    <Container>
      <StyledRegistrationPage>
        <div className="RegistrationPage">
          <Heading headingText="Регистрация" />
          <form onSubmit={handleSubmit(onRegistrationSubmit)}>
            <Controller
              name="usercity"
              control={control}
              render={(field) => (
                <Input
                  isError={errors.usercity ? true : false}
                  errorMessage={errors.usercity?.message}
                  type="text"
                  placeholder="Город"
                  {...field}
                />
              )}
            />
            <Controller
              name="username"
              control={control}
              render={(field) => (
                <Input
                  isError={errors.username ? true : false}
                  errorMessage={errors.username?.message}
                  type="text"
                  placeholder="Имя и Фамилия"
                  {...field}
                />
              )}
            />
            <Controller
              name="useremail"
              control={control}
              render={(field) => (
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
              name="userphone"
              control={control}
              render={(field) => (
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
              render={(field) => (
                <Input
                  isError={errors.userphone ? true : false}
                  errorMessage={errors.userpassword?.message}
                  type="password"
                  placeholder="Придумайте надёжный пароль"
                  {...field}
                />
              )}
            />
            <Button
              type="submit"
              buttonText="Зарегистрироваться"
              isPrimary={true}
              disabled={!!Object.keys(errors).length}
            />
          </form>
          <RegistrationInfo
            question="Уже есть аккаунт?"
            linkURL="/login"
            linkLabel="Войти"
          />
        </div>
      </StyledRegistrationPage>
    </Container>
  );
};

// import { Controller, SubmitHandler, useForm } from "react-hook-form";
// import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
// import { Heading } from "../../components/Typography/Heading";
// import { Button } from "../../components/UI/Button/Button";
// import { Container } from "../../components/UI/Container/Container.style";
// import { Input } from "../../components/UI/Input/Input";
// import { StyledRegistrationPage } from "./RegistrationPage.style";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { setUser } from "../../store/slices/authSlice";

// interface IRegistrationForm {
//   username: string;
//   userphone: string;
//   userpassword: string;
//   useremail: string;
//   usercity: string;
// }

// const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

// const registrationFormSchema = yup.object({
//   username: yup.string().required("Обязательное поле!"),
//   userphone: yup
//     .string()
//     .matches(regexUZB, "Введите узбекский номер телефона!")
//     .required("Обязательное поле!"),
//   userpassword: yup
//     .string()
//     .min(4, "Пароль должен содержать как минимум 4 символа!")
//     .required("Обязательное поле!"),
//   useremail: yup.string().email().required("Обязательное поле!"),
//   usercity: yup.string().required("Обязательное поле!"),
// });

// export const RegistrationPage = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IRegistrationForm>({
//     resolver: yupResolver(registrationFormSchema),
//     defaultValues: {
//       username: "",
//       userphone: "",
//       userpassword: "",
//       useremail: "",
//       usercity: "",
//     },
//   });

//   // console.warn("ERRORS: ", errors);

//   const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
//     console.log("DATA: ", data);
//   };

//   return (
//     <Container>
//       <StyledRegistrationPage>
//         <Heading headingText="Регистрация" />
//         <form onSubmit={handleSubmit(onRegistrationSubmit)}>
//           <Controller
//             name="username"
//             control={control}
//             render={({ field }) => (
//               <Input
//                 isError={errors.username ? true : false}
//                 errorMessage={errors.username?.message}
//                 type="text"
//                 placeholder="Имя и фамилия"
//                 {...field}
//               />
//             )}
//           />
//           <Controller
//             name="useremail"
//             control={control}
//             render={({ field }) => (
//               <Input
//                 isError={errors.useremail ? true : false}
//                 errorMessage={errors.useremail?.message}
//                 type="email"
//                 placeholder="Почта"
//                 {...field}
//               />
//             )}
//           />
//           <Controller
//             name="userphone"
//             control={control}
//             render={({ field }) => (
//               <Input
//                 isError={errors.userphone ? true : false}
//                 errorMessage={errors.userphone?.message}
//                 type="tel"
//                 placeholder="Номер телефона"
//                 {...field}
//               />
//             )}
//           />
//           <Controller
//             name="usercity"
//             control={control}
//             render={({ field }) => (
//               <Input
//                 isError={errors.usercity ? true : false}
//                 errorMessage={errors.usercity?.message}
//                 type="text"
//                 placeholder="city"
//                 {...field}
//               />
//             )}
//           />
//           <Controller
//             name="userpassword"
//             control={control}
//             render={({ field }) => (
//               <Input
//                 isError={errors.userpassword ? true : false}
//                 errorMessage={errors.userpassword?.message}
//                 type="password"
//                 placeholder="Пароль"
//                 {...field}
//               />
//             )}
//           />

//           <Button
//             isPrimary
//             disabled={!!Object.keys(errors).length}
//             type="submit"
//             buttonText="Зарегистрироваться"
//           />
//         </form>
// <RegistrationInfo
//   question="Уже есть аккаунт?"
//   linkURL="/login"
//   linkLabel="Войти"
// />
//       </StyledRegistrationPage>
//     </Container>
//   );
// };
