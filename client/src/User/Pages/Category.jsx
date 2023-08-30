import React, { useEffect, useState } from 'react'
import UserCards from '../Components/userCards'
import axios from 'axios'
export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('/api/get-all-categories')
            .then(json => setCategory(json.data.category))
            .catch(err => alert(err.message))

    }, [])

    return (
        <div className="" style={{ backgroundImage: 'url("https://www.nicepng.com/png/full/24-247272_background-pattern-s-white-background-pattern-png.png")', backgroundSize: 'cover', height: '92.7vh' }}>
            <div className="text-center py-4">
                <h2>Category</h2>
                {/* <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small> */}
            </div>
            <center>
                <div className="row p-4 m-0">
                    {
                        category.map((val, key) => <UserCards key={key} image={val.CategoryImage} name={val.CategoryName} url={`/category/${val.CategoryName}`} />)
                    }

                </div>
            </center>

        </div>
    )
}