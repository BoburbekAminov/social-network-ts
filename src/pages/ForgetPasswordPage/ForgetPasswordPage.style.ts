import styled from "styled-components";

export const StyleForgetPasswordPage = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.elemsBgc};
  margin: 0 auto;
  width: 80%;
  max-width: 492px;
  text-align: center;
  padding: 40px;

  input {
    display: block;
    width: 100%;
    background-color: transparent;

    &:last-child {
      margin-bottom: 16px;
    }

    &:is(:hover, :focus) {
      border-color: ${(props) => props.theme.colors.primeColor};
    }
  }
  h1 {
    margin-bottom: 16px;
  }

  .forgetText{
    margin-bottom: 56px;

    span {
      display: inline-block;
      font-size: 16px;
      color: ${(props) => props.theme.colors.gray};

      a {
        display: inline;
        color: ${(props) => props.theme.colors.primeColor};
      }
    }

    p {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 530px) {
    .LoginPage {
      width: 100%;
    }
  }
`;
