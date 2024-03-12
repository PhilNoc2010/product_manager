import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductPage = (props) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("on the product page")
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, [id])

    const editHandler = () => {
        navigate("/" + id + "/edit" )
    }

    const deleteHandler = () => {
        console.log("clicked on the delete button")
        axios.delete("http://localhost:8000/api/products/" +id)
            .then(res => {
                console.log("product deleted")
            })
            .catch(err => {
                console.log(err)
            })
        navigate("/")
    }

  return (
    <div>
    {product ?
    <>
        <h3>{product.product.title}</h3>
        <h2>${product.product.price}</h2>
        <h4>{product.product.description}</h4>
        <button onClick={editHandler}>Edit Product Listing</button>
        <button onClick={deleteHandler}>Delete Product</button>
    </>
    : <h3>Product Loading...</h3>}


    </div>


  )
}

export default ProductPage