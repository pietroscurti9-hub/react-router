import { useParams } from "react-router-dom";
import axios from "axios";

const endDetail = "https://fakestoreapi.com/products/:id"

export default function DettagliProdotti() {

    const { id } = useParams();

    return (
        <h2>pagina dettaglio prodotti {id}</h2>
    )
}