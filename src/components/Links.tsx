import {Link} from "react-router-dom";

function Links() {
  return (
    <>
      <Link to={"/"}>Cadastro</Link> | <Link to={"/contato"}>Login</Link>
    </>
  );
}

export default Links;
