import React, {useState} from "react";
import Links from "../components/Links";

const Login: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Login bem-sucedido.");
    setName("");
    setEmail("");
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <label htmlFor="email">E-mail:</label>
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button type="submit">Enviar</button>
      </form>
      <Links />
    </>
  );
};

export default Login;
