import { useParams, useNavigate } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function CharacterDetailWrapper() {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <CharacterDetail id={id} navigate = {navigate} />
    ) 
}
export default CharacterDetailWrapper