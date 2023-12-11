import styled from "styled-components";

export const StyleLeftSide = styled.aside`
  grid-area: L;

  .Navbar {
    margin-bottom: 20px;
  }

  @media (max-width: 730px) {
    .MainPage {
      display: block;

      .LeftSide {
        display: none;
      }
    }
  }
  .Navbar {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    border-radius: 20px;
    padding: calc(1vw + 11px);
    background-color: ${(props) => props.theme.colors.elemsBgc};
    color: ${(props) => props.theme.colors.textColor};

    .navbar__list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .navbar__item {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 20px;

      border-radius: 10px;
      padding: 10px 15px;
      list-style: none;
      transition: 200ms;

      .icon {
        flex: 0 1 25px;
        height: calc(1vw + 5px); //? 1440 - 20 | 1920 - 25
        object-fit: contain;
        fill: ${(props) => props.theme.colors.primeColor};
      }

      .item__name {
        flex: 1 1 auto;
      }

      &:hover {
        background-color: ${(props) => props.theme.colors.lightGray};
      }

      &:active {
        transition: 100ms;
        background-color: ${(props) => props.theme.colors.primeColor};
        color: white;

        .icon {
          fill: white;
        }

        .Badge {
          background-color: white;
          color: ${(props) => props.theme.colors.textColor};
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .MainPage {
      grid-template-columns: min-content auto;

      .LeftSide {
        .List {
          display: none;
        }
      }
    }

    .Navbar {
      .navbar__item {
        display: inline-block;

        .icon {
          height: 25px;
        }

        .item__name {
          display: none;
        }

        .Badge {
          display: none;
        }
      }
    }
  }

  .List {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    padding: calc(1vw + 11px);

    &__title {
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .UserElem {
    cursor: pointer;
    position: relative;
    list-style: none;

    display: flex;
    align-items: center;
    gap: 15px;

    padding: 15px;
    border-radius: 15px;

    transition: 200ms;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }

    &:active {
      transition: 100ms;
      background-color: ${(props) => props.theme.colors.primeColor};
      p {
        color: white;
      }

      .Badge {
        background-color: white;
        color: ${(props) => props.theme.colors.textColor};
      }
    }

    &:not(:last-child) {
      margin-bottom: 15px;

      &::after {
        content: "";
        height: 1px;
        width: 80%;
        background-color: ${(props) => props.theme.colors.lightGray};

        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user__description {
      flex: 1 1 auto;

      .main__text {
        margin-bottom: 5px;
        display: inline-block;
      }
    }

    .secondary__text {
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
      font-weight: 300;

      &._online {
        color: ${(props) => props.theme.colors.green};
      }
    }
  }
`;
