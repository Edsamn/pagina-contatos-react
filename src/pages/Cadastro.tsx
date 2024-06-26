import {useState} from "react";

function Cadastro() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name === "" || email === "") {
      console.log("Por favor, preencha todos os campos.");
    } else {
      console.log("Cadastro bem-sucedido.");
      setName("");
      setEmail("");
      setTimeout(function () {
        window.location.href = "/login";
      }, 2000);
    }
  }

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
        <label htmlFor="name">Nome:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <label htmlFor="email">E-mail:</label>
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button type="submit" style={{backgroundColor: "#2f14e1", marginTop: "10px"}}>
          Enviar
        </button>
      </form>
    </>
  );
}

export default Cadastro;
