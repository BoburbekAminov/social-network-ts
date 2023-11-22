import { ErrorMessage, InputContainer, StyledInput } from "./Input.style";
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isError: boolean;
}

export const Input = ({
  type,
  placeholder,
  errorMessage,
  isError,
  ...props
}: IInputProps) => {
  return (
    <InputContainer>
      <StyledInput
        type={type}
        $isError={isError}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      {isError && <ErrorMessage> {errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
