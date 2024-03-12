import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios

from 'axios'

const EditPage = (props) => {

    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState("")

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        console.log("on the product edit page")
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data)
                setProductName(res.data.product.title)
                setPrice(res.data.product.price)
                setDesc(res.data.product.description)
            })
            .catch(err => {
                console.log(err)
            });
    }, [id])

    const updateHandler = (e) => {
        e.preventDefault()
        console.log("in the update handler")
        axios.patch("http://localhost:8000/api/products/" +id, {
            title: productName,
            price : price,
            description: desc
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        navigate("/products/" + id)
    }

    return (
        <div>
            <h4>Edit Product</h4>
            <form onSubmit={updateHandler}>
                <div>
                    <label htmlFor="prodName">Product Name</label>
                    <input type="text" id="prodName" value={productName} onChange={(e) => setProductName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="desc">Description</label>
                    <input type="text" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <button>Update Product</button>
            </form>
        </div>
    )
}


export default EditPage