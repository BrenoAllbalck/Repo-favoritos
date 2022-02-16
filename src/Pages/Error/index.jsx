import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div>
            <h1 style={{color:"#fff"}}>ops, esta pagina não está disponivel :(. Talvez voce estea procurando:</h1><br/>
                <Link to={'/'}>Informações</Link><br/>
                <Link to={'/Info'}>Informações</Link><br/>
        </div>
    )
}