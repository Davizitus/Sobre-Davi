import { Link } from "react-router-dom";
import H1 from "../../components/Title";
import H2 from "../../components/h2";
import Button from "../../components/buttons";
function Experiencias() {

    return(

        <div>
            <Link to="/" >
            <Button text="Voltar" />
            </Link>
            <H1 text="Minhas Experiências" />

            <H2 text="Eu tenho conhecimento de como usar HTML, CSS, Java Script, React e
            Git bath.  " />

        </div>

    )

}

export default Experiencias;