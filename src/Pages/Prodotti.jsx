// importo axios useeffect e usestate
import axios from "axios";
import { useState, useEffect } from "react";


const endPoint = "https://fakestoreapi.com/products"
export default function Prodotti() {


    const [articoli, setArticoli] = useState([])

    useEffect(() => {
        axios.get(endPoint)
            .then(response => {
                console.log(response.data)
                setArticoli(response.data)
            })
            .catch(err => console.log(err))


    }, [])



    return (
        <>
            <h1>prodotti</h1>

            <div className="prodotti-container">
                {articoli.map(articolo => (

                    <div className="card" >

                        <div className="card-body">
                            <h5 className="card-title">{articolo.title}</h5>
                            <img src={articolo.image} alt="" />
                            <p className="card-text">{articolo.description} </p>

                        </div>
                    </div>


                ))}


            </div>
        </>



    )

}