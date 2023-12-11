import styled from "styled-components";

export const StyleMainPage = styled.div`
  display: grid;
  grid-template-areas: "L M R";
  grid-template-columns: minmax(300px, 360px) auto minmax(300px, 360px);
  gap: 30px;


  .Main {
    grid-area: M;
  }

  .WhatsNew {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    gap: 10px;

    img {
      flex: 0 0 40px;
      border-radius: 50%;
      height: 40px;
      object-fit: cover;
    }

    input {
      flex: 1 1 auto;
      background: transparent;
    }

    .icons-wrapper {
      flex: 0 1 20%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;

      .icon {
        cursor: pointer;
        flex: 0 0 24px;
        width: 24px;
        border: 1px solid transparent;
        border-radius: 10px;
        fill: ${(props) => props.theme.colors.primeColor};
        padding: 10px;
        box-sizing: content-box;

        transition: 200ms;

        &:hover {
          border-color: ${(props) => props.theme.colors.lightGray};
          background-color: ${(props) => props.theme.colors.bgc};
        }

        &:active {
          transition: 100ms;
          background-color: ${(props) => props.theme.colors.primeColor};
          fill: white;
        }
      }
    }
  }

  @media (max-width: 730px) {
    .WhatsNew {
      padding: 10px 15px;
    }
  }

  .History {
    position: relative;
    overflow: visible;
    margin-bottom: 20px;

    &__wrapper {
      display: flex;
      gap: 6px;
      overflow: hidden;
    }

    .icon-slider-button {
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: -20px;
      transform: translateY(-50%);
      z-index: 2;

      width: 40px;
      height: 40px;
      transition: 200ms;

      &:hover {
        scale: 1.1;
        filter: drop-shadow(
          0 0 10px ${(props) => props.theme.colors.primeColor}
        );
      }

      &:active {
        transition: 100ms;
        scale: 0.9;
        filter: none;
      }
    }
  } 

  .History__item {
    flex: 0 0 145px;
    cursor: pointer;
    height: calc(6.3vw + 110px); //? 200 - 1440 | 230 - 1920
    border-radius: 20px;
    overflow: hidden;

    position: relative;

    transition: 200ms;

    .History__owner {
      transition: 400ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    span {
      display: block;
      width: min-content;
      color: ${(props) => props.theme.colors.elemsBgc};
      transition: 200ms;
      font-size: 14px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: 200ms;
    }

    &:hover {
      .History__owner {
        transform: translateY(200%);
      }

      &::before {
        background-color: ${(props) => props.theme.colors.primeColor};
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 1480px) {
    .History__item {
      flex: 0 0 110px;
    }
  }

  .History__owner {
    position: absolute;
    bottom: 20px;
    left: 20px;

    .owner__img {
      display: block;
      height: 40px;
      width: 40px;
      object-fit: cover;
      border: 2px solid ${(props) => props.theme.colors.blue};
      border-radius: 50%;

      margin-bottom: 10px;
    }
  }

  .add-history {
    .icon-wrapper {
      position: absolute;
      top: 47%;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 1;
      text-align: center;
      transition: 200ms;

      .icon-plus {
        fill: ${(props) => props.theme.colors.primeColor};
        width: 14px;
        margin-bottom: 20px;
        transition: 200ms;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background-color: ${(props) => props.theme.colors.bgc};

      transition: 200ms;
    }

    &:hover {
      .icon-plus {
        fill: white;
        rotate: 180deg;
        scale: 1.2;
      }

      &::after {
        border-radius: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.colors.primeColor};
        opacity: 0.7;
      }

      &::before {
        background-color: transparent;
      }
    }
  }

  .Post {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    padding: calc(1vw + 11px);
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    margin-bottom: 20px;

    position: relative;

    &._liked {
      .icon-wrapper {
        .icon-like {
          fill: ${(props) => props.theme.colors.red};
          stroke: 0;
          stroke-width: 0;
        }

        .likes-count {
          color: ${(props) => props.theme.colors.red};
        }
      }
    }

    &._marked {
      .icon-wrapper {
        .icon-mark {
          fill: ${(props) => props.theme.colors.primeColor};
          stroke: 0;
          stroke-width: 0;
        }
      }
    }

    .UserElem {
      cursor: default;
      padding: 0;
      margin-bottom: 30px;

      &:hover {
        background-color: initial;
        scale: 1;
      }

      &::after {
        display: none; //? нижняя полоса в списке
      }

      img {
        flex: 0 0 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    &__text {
      margin-bottom: 20px;
    }
  }

  .icon-more {
    cursor: pointer;
    position: absolute;
    top: calc(1vw + 11px);
    right: calc(1vw + 11px);
    width: 25px;
    padding: 15px;
    box-sizing: content-box;
    border-radius: 15px;

    fill: ${(props) => props.theme.colors.darkGray};
    transition: 200ms;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }

    &:active {
      transition: 100ms;
      background-color: ${(props) => props.theme.colors.primeColor};
      fill: white;
    }
  }

  .media-container {
    display: grid;
    gap: 5px;

    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    grid-template-rows: minmax(300px, 400px);
    grid-auto-rows: minmax(300px, 400px);

    border-radius: 20px;
    margin-bottom: 40px;
    overflow: hidden;

    .media__item {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }

  @media (max-width: 1480px) {
    .media-container {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      grid-template-rows: minmax(100px, 200px);
      grid-auto-rows: minmax(100px, 200px);
    }
  }

  .Repost__wrapper {
    border-left: 1px solid ${(props) => props.theme.colors.gray};
    padding-left: 30px;
    margin-left: 30px;
  }

  .PostControls {
    display: grid;
    grid-template-columns: repeat(3, auto) 2fr;

    justify-content: center;
    align-items: center;

    gap: 15px;

    .icon-wrapper {
      cursor: pointer;
      padding: 10px;
      background-color: ${(props) => props.theme.colors.bgc};
      border-radius: 15px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &:hover {
        background-color: ${(props) => props.theme.colors.lightGray};
      }

      .count {
        color: ${(props) => props.theme.colors.darkGray};
        font-weight: 400;
      }

      .icon {
        height: 25px;
        overflow: visible;
        fill: transparent;
        transition: 200ms;
      }

      .icon-like {
        stroke: ${(props) => props.theme.colors.darkGray};
        stroke-width: 2px;
      }

      .icon-mark {
        stroke: ${(props) => props.theme.colors.darkGray};
        stroke-width: 2px;
      }

      &.mark {
        justify-self: self-end;
      }
    }
  }

  .MusicBlock {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    background-color: ${(props) => props.theme.colors.elemsBgc};
    padding: calc(1vw + 11px);
    border-radius: 20px;

    &__title {
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: ${(props) => props.theme.colors.primeColor};
        font-weight: 400;
      }
    }

    .MusicElem {
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

      img {
        flex: 0 0 70px;
        height: 70px;
        width: 70px;
        border-radius: 5px;
        object-fit: cover;
      }

      .music__description {
        flex: 1 1 auto;

        .main__text {
          margin-bottom: 5px;
          display: inline-block;
        }
      }

      .secondary__text {
        font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
        font-weight: 300;
      }

      .plus-button {
        flex: 0 0 24px;
        height: 24px;

        border: 2px solid ${(props) => props.theme.colors.primeColor};
        border-radius: 50%;

        position: relative;

        &::before {
          content: "";
          border-radius: 5px;
          height: 2px;
          width: 70%;
          background-color: ${(props) => props.theme.colors.primeColor};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: 200ms;
        }

        &::after {
          content: "";
          border-radius: 5px;
          width: 2px;
          height: 70%;
          background-color: ${(props) => props.theme.colors.primeColor};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: 200ms;
        }

        &._active {
          &::after {
            transform: translate(-50%, -50%) rotate(90deg);
          }
        }
      }
    }
  }

`;
