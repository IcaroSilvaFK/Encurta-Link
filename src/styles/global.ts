import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --white:#ffffff;
    --black:#000;
    --background-body:#14213d;
    --gray-50:#e5e5e5;
    --background-button:#fca311
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  body,#root{
    width: 100%;
    height: 100vh
  }

  body,#root, input,a,button{
    font-family: 'Poppins', sans-serif;
    background-color:var(--background-body);
    color: #ffffff
  }

  button{
    cursor: pointer
  }

  button, input{
    border: none;
    outline : none;
    background-color: transparent
  }
  
  
`;
