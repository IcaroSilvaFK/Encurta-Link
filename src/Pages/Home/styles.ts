import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 50px 0;

  header {
    text-align: center;

    h1 {
      font-size: 50px;
      span {
        font-size: 12px;
      }
    }

    span {
      font-size: 18px;
    }
  }

  form {
    margin-top: 50px;
    display: flex;
  }
  button {
    background-color: var(--background-button);

    padding: 15px;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 500px) {
    header {
      text-align: center;

      h1 {
        font-size: 40px;
        span {
          font-size: 12px;
        }
      }

      span {
        font-size: 18px;
      }
    }
    form {
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;

      button {
        width: 100px;
        height: 50px;
        border-radius: 5px;
      }
    }
  }
`;

export const Row = styled.div`
  border: 1px solid var(--gray-50);

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  padding: 10px;

  display: flex;
  align-items: center;
  gap: 10px;

  input {
    font-size: 18px;
    color: var(--gray-50);
    width: 450px;
    padding: 0 10px;

    &::placeholder {
      color: var(--gray-50);
    }
  }

  @media (max-width: 500px) {
    max-width: 350px;
    border-radius: 5px;
    svg {
      display: none;
    }
    input {
      width: 100%;

      &::placeholder {
        text-align: center;
      }
    }
  }
`;

export const Box = styled.footer`
  background-color: rgba(0, 0, 0, 0.3);

  width: 50%;
  height: 150px;

  margin-top: 150px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  div {
    width: 450px;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    input {
      flex-grow: 1;
      padding: 10px;
      cursor: not-allowed;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 100px;
    div {
      width: 80%;
      height: auto;
      flex-direction: column;
      background-color: transparent;
      align-items: center;
      gap: 10px;
      input {
        background-color: #fff;
        border-radius: 5px;
      }
    }
  }
`;

export const ButtonCopy = styled.button`
  width: 50px;
  height: 40px;

  @media (max-width: 500px) {
    width: 150px;
    height: 40px;
    border-radius: 5px;
  }
`;
