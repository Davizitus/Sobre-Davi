import { Link } from "react-router-dom"
import H1 from "../../components/Title";
import Button from "../../components/buttons"
function Pontos_fortes() {

    return(
        <div>
            <Link to="/" >
                <Button text="Voltar" />
            </Link>
        
            <H1 text="Pontos Fortes" />

        </div>



    )


}

export default Pontos_fortes;