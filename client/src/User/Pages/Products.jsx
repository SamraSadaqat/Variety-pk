import React, { useEffect, useState } from 'react'
import UserCards from '../Components/userCards'
import axios from 'axios'

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/api/get-all-products')
            .then(json => setProducts(json.data.products))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="" style={{ backgroundImage: 'url("https://www.nicepng.com/png/full/24-247272_background-pattern-s-white-background-pattern-png.png")', backgroundSize: 'cover', height: '92.7vh' }}>
            <div className="text-center py-4">
                <h2>Products</h2>
                {/* <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small> */}
            </div>
            <center>
                <div className="row p-4 m-0">
                    {
                        products.map((val, key) => <UserCards key={key} image={val.thumbnail} name={val.productName} url={`/products/${val._id}`} />)
                    }

                </div>
            </center>

        </div>
    )
}