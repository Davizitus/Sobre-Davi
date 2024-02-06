import { Link } from "react-router-dom";
import H1 from "../../components/Title";
import Button from "../../components/buttons";
import Resumo from "../resumo";
function Home() {
    return (
      <div>
      <H1 text="Sobre mim Davi" />

      <Link to="/Resumo" >
      <Button text="Resumo da minha vida" />
      </Link>
      <Link to="/Experiências" >
      <Button text="Minhas experiencias" />
      </Link>
      <Link to="/Pontos-Fortes" >
      <Button text="Pontos fortes" />
      </Link>
      <Link to="Pontos-Fracos" >
      <Button text="Pontos fracos" />
      </Link>
      
      
      
      </div>
    );
  }
  
  export default Home;