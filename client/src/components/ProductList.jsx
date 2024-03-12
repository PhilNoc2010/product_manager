import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProductList = (props) => {

    const [productList, setProductList] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                console.log(response.data)
                setProductList(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const deleteHandler = (prodID) => {
        axios.delete("http://localhost:8000/api/products/" + prodID)
        .then(res => {
            removeFromDom(prodID)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const removeFromDom = (prodID) => {
        setProductList(productList.filter(product => product._id !== prodID))
    }

  return (
    <div>
        <h1>All Available Products</h1>
        {productList ?
            <ul>
                {productList.map((product) => {
                    return <li key={product._id}>
                        <Link to={"products/" + product._id}>
                            {product.title}
                        </Link>
                        <button onClick={(e) => deleteHandler(product._id)}>Remove</button>
                        </li>
                })
                }
            </ul>
            : "Product List Loading"}


    </div>
  )
}

export default ProductList