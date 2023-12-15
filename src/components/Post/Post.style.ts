import styled, { css } from "styled-components";

interface IStyledPostProps {
  $isLiked?: boolean;
  $isMarked?: boolean;
}
export const StyledPost = styled.div<IStyledPostProps>`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  padding: calc(1vw + 11px);
  background-color: ${(props) => props.theme.colors.elemsBgc};
  border-radius: 20px;
  margin-bottom: 20px;

  position: relative;

  ${(props) =>
    props.$isLiked &&
    css`
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
    `}

  ${(props) =>
    props.$isMarked &&
    css`
      .icon-wrapper {
        .icon-mark {
          fill: ${(props) => props.theme.colors.primeColor};
          stroke: 0;
          stroke-width: 0;
        }
      }
    `}

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

  .CommentBlock {
    cursor: pointer;
    position: relative;
    list-style: none;

    display: flex;
    gap: 15px;

    margin-top: 20px;
    padding: 15px;
    border-radius: 15px;

    transition: 200ms;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }

    &::before {
      content: "";
      height: 1px;
      width: 100%;
      background-color: ${(props) => props.theme.colors.lightGray};

      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    .comment__description {
      flex: 1 1 auto;

      .comment__owner {
        margin-bottom: 10px;
        display: inline-block;
      }

      .comment__text {
        font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
        font-weight: 300;
        margin-bottom: 10px;
      }

      .reply {
        color: ${(props) => props.theme.colors.primeColor};
        font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
      }
    }

    .date {
      position: absolute;
      top: 15px;
      right: 15px;
      color: ${(props) => props.theme.colors.gray};
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
    }

    .icon-like {
      position: absolute;
      bottom: 15px;
      right: 15px;

      overflow: visible;
      width: 22px;

      fill: none;
      stroke: ${(props) => props.theme.colors.darkGray};
      stroke-width: 2px;

      transition: 200ms;

      &._active {
        fill: var(--red);
        stroke: none;
      }

      &:hover {
        stroke: none;
        fill: ${(props) => props.theme.colors.primeColor};
      }
    }
  }
`;

export const PostSettingsBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;
