import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'

export default function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('/api/get-all-categories')
            .then(json => setCategory(json.data.category))
            .catch(err => alert(err.message))
    }, [])

    return (

        <div className='flex ' style={{ height: "100%", width: "100%" }}>
            <div className="container my-5">
                <div className="text-center text-dark">
                    <h2>Categories</h2>
                </div>
                <p className="text-dark border bg-dark.bg-gradient">Indulge in the art of self-expression with Variety.PK's extensive makeup range. From everyday essentials to bold, glamorous choices, we offer a kaleidoscope of colors and products to <center>help you create your unique beauty statement. Discover the beauty within, one product at a time.</center>    </p>

                <div className="row my-5">
                    {
                        category.map((val, key) => <GuestCards key={key} image={val.CategoryImage} name={val.CategoryName} />)
                    }

                </div>
            </div>

        </div>
    )
}
