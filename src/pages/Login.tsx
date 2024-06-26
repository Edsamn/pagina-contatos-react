import React, {useState} from "react";
import {Link} from "react-router-dom";

const Login: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name === "" || email === "") {
      console.log("Por favor, preencha todos os campos.");
    } else {
      console.log("Login bem-sucedido.");
      setName("");
      setEmail("");
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
        <label htmlFor="name">Nome:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <label htmlFor="email">E-mail:</label>
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button type="submit" style={{backgroundColor: "#2f14e1", marginTop: "10px"}}>
          Enviar
        </button>
        <small>
          Não possui conta? <Link to="/">Cadastrar</Link>
        </small>
      </form>
    </>
  );
};

export default Login;
