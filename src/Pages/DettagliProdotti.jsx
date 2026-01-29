import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const endDetail = "https://fakestoreapi.com/products/"



export default function DettagliProdotti() {

    const { id } = useParams();

    useEffect(() =>{
        axios.get(endDetail + {id})
        .then(res => console.log(res.data))
        .catch(err => console.log("errore chiamata api"))
    },[])

                
            
    return (
        <>
            <h2>pagina dettaglio prodotti {id}</h2>

            <div className="card-body">
                <h5 className="card-title">{endDetail.title}</h5>
                <img src={endDetail.image} alt="" className="card-img-top" />
                <p className="card-text">{endDetail.description} </p>
            </div>

        </>






    )
}