import { useState, useRef, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { IoCopy } from "react-icons/io5";
import { BiCommentError } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../components/Input";

import { Container, Row, Box, ButtonCopy } from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

interface IFormProps {
  url: string;
}

const schema = yup.object().shape({
  url: yup
    .string()
    .url("O campo precisa ser uma url valida")
    .required("O campo é obrigatório"),
});

export function HomePage() {
  const [uri, setUri] = useState("Clique no botão para copiar  a url");
  const [error, setError] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const props = useForm<IFormProps>({
    defaultValues: {
      url: "",
    },

    resolver: yupResolver(schema),
  });

  useEffect(() => {
    document.title = "ENCURTALINKS";
  }, []);
  console.log(!!props.formState.errors.url?.message);

  useEffect(() => {
    toast.error(props.formState.errors.url?.message, {
      draggable: true,
      position: "top-center",
      theme: "dark",
      closeOnClick: true,
    });
  }, [props.formState.errors.url?.message]);

  const handleSendUri: SubmitHandler<IFormProps> = async ({ url }) => {
    const response = await axios.get(`https://is.gd/create.php`, {
      params: {
        format: "json",
        url: url,
      },
    });
    if (response.status >= 400) {
      toast.error("Infleismente tivemos um erro inesperado 😪", {
        theme: "dark",
        draggable: true,
        position: "top-center",
        icon: <BiCommentError />,
      });
      setError(true);
    }
    if (response.status === 200) {
      setUri(response.data?.shorturl);
    }
    props.reset();
  };

  const handleCopyText = () => {
    console.log(inputRef.current?.select());
    document.execCommand("copy");
  };

  return (
    <Container>
      <header>
        <h1>
          ENCURTALINKS<span>.com</span>
        </h1>
        <span>O melhor site para encurtar sua url</span>
      </header>

      <FormProvider {...props}>
        <form onSubmit={props.handleSubmit(handleSendUri)}>
          <Row>
            <BsSearch size={25} />
            <Input name='url' placeholder='Digite aqui sua url' />
          </Row>
          <button>
            <IoIosSend size={25} />
          </button>
        </form>
      </FormProvider>
      <Box>
        {error ? (
          <></>
        ) : (
          <>
            <p>URL encurtada</p>
            <div>
              <input
                type='text'
                ref={inputRef}
                style={{ color: "black" }}
                value={uri}
              />
              <ButtonCopy onClick={handleCopyText}>
                <IoCopy size={20} />
              </ButtonCopy>
            </div>
          </>
        )}
      </Box>
    </Container>
  );
}
