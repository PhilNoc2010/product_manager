import React from 'react'
import { useState } from 'react'



const ProductForm = (props) => {
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState("")

    return (
        <div>
            <form action="">
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
                <button>Add New Product</button>
            </form>
        </div>
    )
}

export default ProductForm