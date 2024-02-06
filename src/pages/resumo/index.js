import { Link } from "react-router-dom";
import H1 from "../../components/Title";
import H2 from "../../components/h2";
import Button from "../../components/buttons";
function Resumo() {

return(
<div>
    <Link to="/" >
        <Button text="Voltar" />
    </Link>

    <H1 text="Resumo da Minha Vida" />

    <H2 text="Eu sempre fui um bom estudante, terminei o terceiro ano com 17 anos
e não sabia o que fazer a seguir e o que fazer da vida, aí fui indicado para
um programa chamado Aceleradora Inclusiva, que ensina a jovens com dificuldades
sociais ou que são cotas á aprender programação, eu entrei prá turma 10 da Aceleradra
e foi uma experiencia ótima, aprendi bastante sobre HTML, CSS, Java Script, React e
Git(Nessa ordem), também consegui conviver bemcom meus colegas e tentei melhorar
 minhas abilidades sociais mas ainda era bem timido, depois que me formei a turma
 10 fui escolhido para ser um dos monitores que ajudariam na proxima turma. " />

 <H2 text="Na Turma 11 eu deveia enfrentar minha timidez para assim conseguir ajudar
 meus novos colegas, tive melhor progresso nesse ponto do que na turma 10 " />
</div>
)


}

export default Resumo;