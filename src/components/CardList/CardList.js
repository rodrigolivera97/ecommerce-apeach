import './CardList.css';
import CardProduct from '../cards/card-product';
import { useState, useEffect } from 'react'
const CardList = (prop) => {
    const [products, setProducts] = useState([])
    const productos = [
        {
            title : "Apeach in House",
            price : 500,
            image : "trago1",
            description : '',
            stock : 10,
            id : 1
        },
        {
            title : "Apeach Tropical",
            price : 600,
            image : "trago2",
            description : '',
            stock : 3,
            id : 2
        },
        {
            title : "Old Terrier Pink",
            price : 650,
            image : "trago3",
            description : '',
            stock : 6,
            id : 3
        },
        {
            title : "Aperol Spritz",
            price : 500,
            image : "trago4",
            description : '',
            stock : 10,
            id : 4
        }
    ]

    const getProducts = () => {
        return new Promise( ( resolve, reject) => {
            let assistant = true;

            setTimeout(() => {
                if(assistant){
                    resolve(productos)
                } else {
                    reject("Error Loading Products")
                }
            }, 2000)
        })
    }
    useEffect( () => {
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
        .catch( (error) => {
        })
        .finally( () => {
        })
    }, [])


    return(
        <>
        <h2>{prop.title}</h2>
        <div className="products">
            {
                products.map( ({title, price, image, description, stock, id }) => {
                    return(
                        <div key={id}>
                            <CardProduct stock={stock} title={title} price={price} image={image}/>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default CardList
