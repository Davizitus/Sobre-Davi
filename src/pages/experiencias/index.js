import { Link } from "react-router-dom";
import H1 from "../../components/Title";
import Button from "../../components/buttons";
function Experiencias() {

    return(

        <div>
            <Link to="/" >
            <Button text="Voltar" />
            </Link>
            <H1 text="Minhas Experiências" />

        </div>

    )

}

export default Experiencias;